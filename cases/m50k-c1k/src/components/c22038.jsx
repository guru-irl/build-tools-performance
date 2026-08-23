import React from 'react';
const LABEL_22038 = 'component_22038';
export function Component22038({ value = 22038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22038, 'data-value': derived.doubled }, children);
}
export default Component22038;
