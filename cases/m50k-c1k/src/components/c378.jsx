import React from 'react';
const LABEL_378 = 'component_378';
export function Component378({ value = 378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_378, 'data-value': derived.doubled }, children);
}
export default Component378;
