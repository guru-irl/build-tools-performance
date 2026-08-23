import React from 'react';
const LABEL_40576 = 'component_40576';
export function Component40576({ value = 40576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40576, 'data-value': derived.doubled }, children);
}
export default Component40576;
