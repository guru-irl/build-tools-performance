import React from 'react';
const LABEL_24426 = 'component_24426';
export function Component24426({ value = 24426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24426, 'data-value': derived.doubled }, children);
}
export default Component24426;
