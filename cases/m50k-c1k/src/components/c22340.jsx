import React from 'react';
const LABEL_22340 = 'component_22340';
export function Component22340({ value = 22340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22340, 'data-value': derived.doubled }, children);
}
export default Component22340;
