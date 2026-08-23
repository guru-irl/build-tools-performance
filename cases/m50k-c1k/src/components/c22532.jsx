import React from 'react';
const LABEL_22532 = 'component_22532';
export function Component22532({ value = 22532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22532, 'data-value': derived.doubled }, children);
}
export default Component22532;
