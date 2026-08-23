import React from 'react';
const LABEL_6743 = 'component_6743';
export function Component6743({ value = 6743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6743, 'data-value': derived.doubled }, children);
}
export default Component6743;
