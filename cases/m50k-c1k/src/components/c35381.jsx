import React from 'react';
const LABEL_35381 = 'component_35381';
export function Component35381({ value = 35381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35381, 'data-value': derived.doubled }, children);
}
export default Component35381;
