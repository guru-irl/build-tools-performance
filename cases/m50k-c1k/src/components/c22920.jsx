import React from 'react';
const LABEL_22920 = 'component_22920';
export function Component22920({ value = 22920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22920, 'data-value': derived.doubled }, children);
}
export default Component22920;
