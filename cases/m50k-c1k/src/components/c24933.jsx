import React from 'react';
const LABEL_24933 = 'component_24933';
export function Component24933({ value = 24933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24933, 'data-value': derived.doubled }, children);
}
export default Component24933;
