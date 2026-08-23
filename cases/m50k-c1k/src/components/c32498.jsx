import React from 'react';
const LABEL_32498 = 'component_32498';
export function Component32498({ value = 32498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32498, 'data-value': derived.doubled }, children);
}
export default Component32498;
