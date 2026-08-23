import React from 'react';
const LABEL_10381 = 'component_10381';
export function Component10381({ value = 10381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10381, 'data-value': derived.doubled }, children);
}
export default Component10381;
