import React from 'react';
const LABEL_6840 = 'component_6840';
export function Component6840({ value = 6840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6840, 'data-value': derived.doubled }, children);
}
export default Component6840;
