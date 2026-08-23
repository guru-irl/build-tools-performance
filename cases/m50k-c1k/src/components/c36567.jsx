import React from 'react';
const LABEL_36567 = 'component_36567';
export function Component36567({ value = 36567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36567, 'data-value': derived.doubled }, children);
}
export default Component36567;
