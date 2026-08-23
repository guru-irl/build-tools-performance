import React from 'react';
const LABEL_8176 = 'component_8176';
export function Component8176({ value = 8176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8176, 'data-value': derived.doubled }, children);
}
export default Component8176;
