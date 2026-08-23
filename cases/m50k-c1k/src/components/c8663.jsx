import React from 'react';
const LABEL_8663 = 'component_8663';
export function Component8663({ value = 8663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8663, 'data-value': derived.doubled }, children);
}
export default Component8663;
