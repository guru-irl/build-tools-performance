import React from 'react';
const LABEL_34416 = 'component_34416';
export function Component34416({ value = 34416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34416, 'data-value': derived.doubled }, children);
}
export default Component34416;
