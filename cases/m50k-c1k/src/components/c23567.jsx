import React from 'react';
const LABEL_23567 = 'component_23567';
export function Component23567({ value = 23567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23567, 'data-value': derived.doubled }, children);
}
export default Component23567;
