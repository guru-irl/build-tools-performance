import React from 'react';
const LABEL_26086 = 'component_26086';
export function Component26086({ value = 26086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26086, 'data-value': derived.doubled }, children);
}
export default Component26086;
