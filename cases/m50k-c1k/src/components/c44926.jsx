import React from 'react';
const LABEL_44926 = 'component_44926';
export function Component44926({ value = 44926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44926, 'data-value': derived.doubled }, children);
}
export default Component44926;
