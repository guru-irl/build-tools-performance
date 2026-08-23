import React from 'react';
const LABEL_227 = 'component_227';
export function Component227({ value = 227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_227, 'data-value': derived.doubled }, children);
}
export default Component227;
