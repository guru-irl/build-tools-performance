import React from 'react';
const LABEL_38410 = 'component_38410';
export function Component38410({ value = 38410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38410, 'data-value': derived.doubled }, children);
}
export default Component38410;
