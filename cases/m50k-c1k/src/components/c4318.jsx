import React from 'react';
const LABEL_4318 = 'component_4318';
export function Component4318({ value = 4318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4318, 'data-value': derived.doubled }, children);
}
export default Component4318;
