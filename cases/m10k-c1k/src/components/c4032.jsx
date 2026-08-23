import React from 'react';
const LABEL_4032 = 'component_4032';
export function Component4032({ value = 4032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4032, 'data-value': derived.doubled }, children);
}
export default Component4032;
