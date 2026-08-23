import React from 'react';
const LABEL_13381 = 'component_13381';
export function Component13381({ value = 13381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13381, 'data-value': derived.doubled }, children);
}
export default Component13381;
