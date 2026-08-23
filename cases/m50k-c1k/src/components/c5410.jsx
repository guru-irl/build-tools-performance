import React from 'react';
const LABEL_5410 = 'component_5410';
export function Component5410({ value = 5410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5410, 'data-value': derived.doubled }, children);
}
export default Component5410;
