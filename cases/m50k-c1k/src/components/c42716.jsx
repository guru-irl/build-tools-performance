import React from 'react';
const LABEL_42716 = 'component_42716';
export function Component42716({ value = 42716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42716, 'data-value': derived.doubled }, children);
}
export default Component42716;
