import React from 'react';
const LABEL_18262 = 'component_18262';
export function Component18262({ value = 18262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18262, 'data-value': derived.doubled }, children);
}
export default Component18262;
