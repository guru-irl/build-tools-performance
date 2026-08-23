import React from 'react';
const LABEL_44381 = 'component_44381';
export function Component44381({ value = 44381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44381, 'data-value': derived.doubled }, children);
}
export default Component44381;
