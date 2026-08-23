import React from 'react';
const LABEL_42160 = 'component_42160';
export function Component42160({ value = 42160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42160, 'data-value': derived.doubled }, children);
}
export default Component42160;
