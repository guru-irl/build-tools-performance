import React from 'react';
const LABEL_14567 = 'component_14567';
export function Component14567({ value = 14567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14567, 'data-value': derived.doubled }, children);
}
export default Component14567;
