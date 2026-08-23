import React from 'react';
const LABEL_18381 = 'component_18381';
export function Component18381({ value = 18381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18381, 'data-value': derived.doubled }, children);
}
export default Component18381;
