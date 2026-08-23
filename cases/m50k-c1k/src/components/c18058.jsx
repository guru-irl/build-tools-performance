import React from 'react';
const LABEL_18058 = 'component_18058';
export function Component18058({ value = 18058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18058, 'data-value': derived.doubled }, children);
}
export default Component18058;
