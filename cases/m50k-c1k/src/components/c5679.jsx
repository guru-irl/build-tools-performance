import React from 'react';
const LABEL_5679 = 'component_5679';
export function Component5679({ value = 5679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5679, 'data-value': derived.doubled }, children);
}
export default Component5679;
