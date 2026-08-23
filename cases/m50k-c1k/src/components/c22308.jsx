import React from 'react';
const LABEL_22308 = 'component_22308';
export function Component22308({ value = 22308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22308, 'data-value': derived.doubled }, children);
}
export default Component22308;
