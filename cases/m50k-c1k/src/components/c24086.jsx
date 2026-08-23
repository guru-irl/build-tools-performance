import React from 'react';
const LABEL_24086 = 'component_24086';
export function Component24086({ value = 24086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24086, 'data-value': derived.doubled }, children);
}
export default Component24086;
