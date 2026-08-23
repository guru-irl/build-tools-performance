import React from 'react';
const LABEL_5855 = 'component_5855';
export function Component5855({ value = 5855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5855, 'data-value': derived.doubled }, children);
}
export default Component5855;
