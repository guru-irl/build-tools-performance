import React from 'react';
const LABEL_40951 = 'component_40951';
export function Component40951({ value = 40951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40951, 'data-value': derived.doubled }, children);
}
export default Component40951;
