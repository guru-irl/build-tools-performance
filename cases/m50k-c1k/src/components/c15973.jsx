import React from 'react';
const LABEL_15973 = 'component_15973';
export function Component15973({ value = 15973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15973, 'data-value': derived.doubled }, children);
}
export default Component15973;
