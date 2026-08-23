import React from 'react';
const LABEL_22973 = 'component_22973';
export function Component22973({ value = 22973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22973, 'data-value': derived.doubled }, children);
}
export default Component22973;
