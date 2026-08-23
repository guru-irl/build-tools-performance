import React from 'react';
const LABEL_24049 = 'component_24049';
export function Component24049({ value = 24049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24049, 'data-value': derived.doubled }, children);
}
export default Component24049;
