import React from 'react';
const LABEL_18350 = 'component_18350';
export function Component18350({ value = 18350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18350, 'data-value': derived.doubled }, children);
}
export default Component18350;
