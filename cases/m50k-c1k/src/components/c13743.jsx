import React from 'react';
const LABEL_13743 = 'component_13743';
export function Component13743({ value = 13743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13743, 'data-value': derived.doubled }, children);
}
export default Component13743;
