import React from 'react';
const LABEL_6381 = 'component_6381';
export function Component6381({ value = 6381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6381, 'data-value': derived.doubled }, children);
}
export default Component6381;
