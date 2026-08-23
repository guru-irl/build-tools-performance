import React from 'react';
const LABEL_18244 = 'component_18244';
export function Component18244({ value = 18244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18244, 'data-value': derived.doubled }, children);
}
export default Component18244;
