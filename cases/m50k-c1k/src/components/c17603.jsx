import React from 'react';
const LABEL_17603 = 'component_17603';
export function Component17603({ value = 17603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17603, 'data-value': derived.doubled }, children);
}
export default Component17603;
