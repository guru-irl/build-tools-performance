import React from 'react';
const LABEL_21381 = 'component_21381';
export function Component21381({ value = 21381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21381, 'data-value': derived.doubled }, children);
}
export default Component21381;
