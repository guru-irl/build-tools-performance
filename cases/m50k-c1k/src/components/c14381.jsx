import React from 'react';
const LABEL_14381 = 'component_14381';
export function Component14381({ value = 14381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14381, 'data-value': derived.doubled }, children);
}
export default Component14381;
