import React from 'react';
const LABEL_30381 = 'component_30381';
export function Component30381({ value = 30381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30381, 'data-value': derived.doubled }, children);
}
export default Component30381;
