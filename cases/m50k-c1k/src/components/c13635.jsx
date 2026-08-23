import React from 'react';
const LABEL_13635 = 'component_13635';
export function Component13635({ value = 13635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13635, 'data-value': derived.doubled }, children);
}
export default Component13635;
