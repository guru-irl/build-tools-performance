import React from 'react';
const LABEL_24141 = 'component_24141';
export function Component24141({ value = 24141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24141, 'data-value': derived.doubled }, children);
}
export default Component24141;
