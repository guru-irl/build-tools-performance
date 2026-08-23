import React from 'react';
const LABEL_855 = 'component_855';
export function Component855({ value = 855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_855, 'data-value': derived.doubled }, children);
}
export default Component855;
