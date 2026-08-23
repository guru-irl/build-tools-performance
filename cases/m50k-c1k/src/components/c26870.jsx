import React from 'react';
const LABEL_26870 = 'component_26870';
export function Component26870({ value = 26870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26870, 'data-value': derived.doubled }, children);
}
export default Component26870;
