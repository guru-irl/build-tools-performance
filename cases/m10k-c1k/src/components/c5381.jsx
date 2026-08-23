import React from 'react';
const LABEL_5381 = 'component_5381';
export function Component5381({ value = 5381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5381, 'data-value': derived.doubled }, children);
}
export default Component5381;
