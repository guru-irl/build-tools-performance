import React from 'react';
const LABEL_29381 = 'component_29381';
export function Component29381({ value = 29381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29381, 'data-value': derived.doubled }, children);
}
export default Component29381;
