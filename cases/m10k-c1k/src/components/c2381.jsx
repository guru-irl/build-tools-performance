import React from 'react';
const LABEL_2381 = 'component_2381';
export function Component2381({ value = 2381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2381, 'data-value': derived.doubled }, children);
}
export default Component2381;
