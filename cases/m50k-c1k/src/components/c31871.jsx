import React from 'react';
const LABEL_31871 = 'component_31871';
export function Component31871({ value = 31871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31871, 'data-value': derived.doubled }, children);
}
export default Component31871;
