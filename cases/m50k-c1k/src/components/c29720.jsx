import React from 'react';
const LABEL_29720 = 'component_29720';
export function Component29720({ value = 29720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29720, 'data-value': derived.doubled }, children);
}
export default Component29720;
