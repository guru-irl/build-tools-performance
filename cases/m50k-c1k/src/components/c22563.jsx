import React from 'react';
const LABEL_22563 = 'component_22563';
export function Component22563({ value = 22563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22563, 'data-value': derived.doubled }, children);
}
export default Component22563;
