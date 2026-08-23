import React from 'react';
const LABEL_247 = 'component_247';
export function Component247({ value = 247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_247, 'data-value': derived.doubled }, children);
}
export default Component247;
