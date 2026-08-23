import React from 'react';
const LABEL_28502 = 'component_28502';
export function Component28502({ value = 28502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28502, 'data-value': derived.doubled }, children);
}
export default Component28502;
