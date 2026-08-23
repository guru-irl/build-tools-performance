import React from 'react';
const LABEL_3032 = 'component_3032';
export function Component3032({ value = 3032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3032, 'data-value': derived.doubled }, children);
}
export default Component3032;
