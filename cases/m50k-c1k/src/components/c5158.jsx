import React from 'react';
const LABEL_5158 = 'component_5158';
export function Component5158({ value = 5158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5158, 'data-value': derived.doubled }, children);
}
export default Component5158;
