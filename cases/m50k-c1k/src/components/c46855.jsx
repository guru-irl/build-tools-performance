import React from 'react';
const LABEL_46855 = 'component_46855';
export function Component46855({ value = 46855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46855, 'data-value': derived.doubled }, children);
}
export default Component46855;
