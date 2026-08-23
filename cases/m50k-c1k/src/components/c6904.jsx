import React from 'react';
const LABEL_6904 = 'component_6904';
export function Component6904({ value = 6904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6904, 'data-value': derived.doubled }, children);
}
export default Component6904;
