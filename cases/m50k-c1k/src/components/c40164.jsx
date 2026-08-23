import React from 'react';
const LABEL_40164 = 'component_40164';
export function Component40164({ value = 40164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40164, 'data-value': derived.doubled }, children);
}
export default Component40164;
