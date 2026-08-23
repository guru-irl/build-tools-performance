import React from 'react';
const LABEL_31381 = 'component_31381';
export function Component31381({ value = 31381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31381, 'data-value': derived.doubled }, children);
}
export default Component31381;
