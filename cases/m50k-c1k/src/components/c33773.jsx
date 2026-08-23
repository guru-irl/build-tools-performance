import React from 'react';
const LABEL_33773 = 'component_33773';
export function Component33773({ value = 33773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33773, 'data-value': derived.doubled }, children);
}
export default Component33773;
