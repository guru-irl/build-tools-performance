import React from 'react';
const LABEL_31288 = 'component_31288';
export function Component31288({ value = 31288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31288, 'data-value': derived.doubled }, children);
}
export default Component31288;
