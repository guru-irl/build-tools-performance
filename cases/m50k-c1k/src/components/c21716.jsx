import React from 'react';
const LABEL_21716 = 'component_21716';
export function Component21716({ value = 21716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21716, 'data-value': derived.doubled }, children);
}
export default Component21716;
