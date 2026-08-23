import React from 'react';
const LABEL_4567 = 'component_4567';
export function Component4567({ value = 4567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4567, 'data-value': derived.doubled }, children);
}
export default Component4567;
