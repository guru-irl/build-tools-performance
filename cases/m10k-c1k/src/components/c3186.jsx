import React from 'react';
const LABEL_3186 = 'component_3186';
export function Component3186({ value = 3186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3186, 'data-value': derived.doubled }, children);
}
export default Component3186;
