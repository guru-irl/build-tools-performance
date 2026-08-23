import React from 'react';
const LABEL_27828 = 'component_27828';
export function Component27828({ value = 27828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27828, 'data-value': derived.doubled }, children);
}
export default Component27828;
