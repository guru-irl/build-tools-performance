import React from 'react';
const LABEL_8904 = 'component_8904';
export function Component8904({ value = 8904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8904, 'data-value': derived.doubled }, children);
}
export default Component8904;
