import React from 'react';
const LABEL_6186 = 'component_6186';
export function Component6186({ value = 6186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6186, 'data-value': derived.doubled }, children);
}
export default Component6186;
