import React from 'react';
const LABEL_46541 = 'component_46541';
export function Component46541({ value = 46541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46541, 'data-value': derived.doubled }, children);
}
export default Component46541;
