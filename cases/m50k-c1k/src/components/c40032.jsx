import React from 'react';
const LABEL_40032 = 'component_40032';
export function Component40032({ value = 40032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40032, 'data-value': derived.doubled }, children);
}
export default Component40032;
