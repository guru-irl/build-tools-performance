import React from 'react';
const LABEL_904 = 'component_904';
export function Component904({ value = 904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_904, 'data-value': derived.doubled }, children);
}
export default Component904;
