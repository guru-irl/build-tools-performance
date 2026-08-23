import React from 'react';
const LABEL_5139 = 'component_5139';
export function Component5139({ value = 5139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5139, 'data-value': derived.doubled }, children);
}
export default Component5139;
