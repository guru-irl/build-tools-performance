import React from 'react';
const LABEL_29855 = 'component_29855';
export function Component29855({ value = 29855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29855, 'data-value': derived.doubled }, children);
}
export default Component29855;
