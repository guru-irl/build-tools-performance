import React from 'react';
const LABEL_38773 = 'component_38773';
export function Component38773({ value = 38773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38773, 'data-value': derived.doubled }, children);
}
export default Component38773;
