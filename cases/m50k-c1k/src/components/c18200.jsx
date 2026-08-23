import React from 'react';
const LABEL_18200 = 'component_18200';
export function Component18200({ value = 18200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18200, 'data-value': derived.doubled }, children);
}
export default Component18200;
