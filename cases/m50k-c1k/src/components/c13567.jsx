import React from 'react';
const LABEL_13567 = 'component_13567';
export function Component13567({ value = 13567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13567, 'data-value': derived.doubled }, children);
}
export default Component13567;
