import React from 'react';
const LABEL_18663 = 'component_18663';
export function Component18663({ value = 18663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18663, 'data-value': derived.doubled }, children);
}
export default Component18663;
