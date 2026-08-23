import React from 'react';
const LABEL_28238 = 'component_28238';
export function Component28238({ value = 28238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28238, 'data-value': derived.doubled }, children);
}
export default Component28238;
