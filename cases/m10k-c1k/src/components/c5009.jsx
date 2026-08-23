import React from 'react';
const LABEL_5009 = 'component_5009';
export function Component5009({ value = 5009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5009, 'data-value': derived.doubled }, children);
}
export default Component5009;
