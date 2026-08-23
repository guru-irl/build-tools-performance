import React from 'react';
const LABEL_5940 = 'component_5940';
export function Component5940({ value = 5940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5940, 'data-value': derived.doubled }, children);
}
export default Component5940;
