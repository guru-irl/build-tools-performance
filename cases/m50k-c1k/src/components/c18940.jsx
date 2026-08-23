import React from 'react';
const LABEL_18940 = 'component_18940';
export function Component18940({ value = 18940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18940, 'data-value': derived.doubled }, children);
}
export default Component18940;
