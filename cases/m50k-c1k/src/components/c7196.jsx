import React from 'react';
const LABEL_7196 = 'component_7196';
export function Component7196({ value = 7196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7196, 'data-value': derived.doubled }, children);
}
export default Component7196;
