import React from 'react';
const LABEL_18314 = 'component_18314';
export function Component18314({ value = 18314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18314, 'data-value': derived.doubled }, children);
}
export default Component18314;
