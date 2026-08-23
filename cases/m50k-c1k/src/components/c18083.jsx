import React from 'react';
const LABEL_18083 = 'component_18083';
export function Component18083({ value = 18083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18083, 'data-value': derived.doubled }, children);
}
export default Component18083;
