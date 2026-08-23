import React from 'react';
const LABEL_20434 = 'component_20434';
export function Component20434({ value = 20434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20434, 'data-value': derived.doubled }, children);
}
export default Component20434;
