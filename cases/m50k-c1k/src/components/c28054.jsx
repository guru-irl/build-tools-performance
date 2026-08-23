import React from 'react';
const LABEL_28054 = 'component_28054';
export function Component28054({ value = 28054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28054, 'data-value': derived.doubled }, children);
}
export default Component28054;
