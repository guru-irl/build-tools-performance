import React from 'react';
const LABEL_46743 = 'component_46743';
export function Component46743({ value = 46743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46743, 'data-value': derived.doubled }, children);
}
export default Component46743;
