import React from 'react';
const LABEL_5607 = 'component_5607';
export function Component5607({ value = 5607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5607, 'data-value': derived.doubled }, children);
}
export default Component5607;
