import React from 'react';
const LABEL_24009 = 'component_24009';
export function Component24009({ value = 24009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24009, 'data-value': derived.doubled }, children);
}
export default Component24009;
