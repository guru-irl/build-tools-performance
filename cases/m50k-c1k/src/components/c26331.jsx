import React from 'react';
const LABEL_26331 = 'component_26331';
export function Component26331({ value = 26331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26331, 'data-value': derived.doubled }, children);
}
export default Component26331;
