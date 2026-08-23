import React from 'react';
const LABEL_7921 = 'component_7921';
export function Component7921({ value = 7921, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7921, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7921, 'data-value': derived.doubled }, children);
}
export default Component7921;
