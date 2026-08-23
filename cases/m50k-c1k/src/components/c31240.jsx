import React from 'react';
const LABEL_31240 = 'component_31240';
export function Component31240({ value = 31240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31240, 'data-value': derived.doubled }, children);
}
export default Component31240;
