import React from 'react';
const LABEL_3176 = 'component_3176';
export function Component3176({ value = 3176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3176, 'data-value': derived.doubled }, children);
}
export default Component3176;
