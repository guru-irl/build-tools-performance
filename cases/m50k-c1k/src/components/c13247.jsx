import React from 'react';
const LABEL_13247 = 'component_13247';
export function Component13247({ value = 13247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13247, 'data-value': derived.doubled }, children);
}
export default Component13247;
