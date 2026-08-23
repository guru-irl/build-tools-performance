import React from 'react';
const LABEL_44176 = 'component_44176';
export function Component44176({ value = 44176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44176, 'data-value': derived.doubled }, children);
}
export default Component44176;
