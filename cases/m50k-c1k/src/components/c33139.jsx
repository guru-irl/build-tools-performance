import React from 'react';
const LABEL_33139 = 'component_33139';
export function Component33139({ value = 33139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33139, 'data-value': derived.doubled }, children);
}
export default Component33139;
