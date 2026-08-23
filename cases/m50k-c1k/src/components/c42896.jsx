import React from 'react';
const LABEL_42896 = 'component_42896';
export function Component42896({ value = 42896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42896, 'data-value': derived.doubled }, children);
}
export default Component42896;
