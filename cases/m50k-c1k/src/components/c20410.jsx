import React from 'react';
const LABEL_20410 = 'component_20410';
export function Component20410({ value = 20410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20410, 'data-value': derived.doubled }, children);
}
export default Component20410;
