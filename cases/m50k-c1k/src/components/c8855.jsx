import React from 'react';
const LABEL_8855 = 'component_8855';
export function Component8855({ value = 8855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8855, 'data-value': derived.doubled }, children);
}
export default Component8855;
