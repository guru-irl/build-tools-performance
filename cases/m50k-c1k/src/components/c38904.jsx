import React from 'react';
const LABEL_38904 = 'component_38904';
export function Component38904({ value = 38904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38904, 'data-value': derived.doubled }, children);
}
export default Component38904;
