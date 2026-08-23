import React from 'react';
const LABEL_38541 = 'component_38541';
export function Component38541({ value = 38541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38541, 'data-value': derived.doubled }, children);
}
export default Component38541;
