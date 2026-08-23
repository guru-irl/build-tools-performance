import React from 'react';
const LABEL_6400 = 'component_6400';
export function Component6400({ value = 6400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6400, 'data-value': derived.doubled }, children);
}
export default Component6400;
