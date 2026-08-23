import React from 'react';
const LABEL_24381 = 'component_24381';
export function Component24381({ value = 24381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24381, 'data-value': derived.doubled }, children);
}
export default Component24381;
