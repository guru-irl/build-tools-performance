import React from 'react';
const LABEL_1381 = 'component_1381';
export function Component1381({ value = 1381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1381, 'data-value': derived.doubled }, children);
}
export default Component1381;
