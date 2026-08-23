import React from 'react';
const LABEL_42833 = 'component_42833';
export function Component42833({ value = 42833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42833, 'data-value': derived.doubled }, children);
}
export default Component42833;
