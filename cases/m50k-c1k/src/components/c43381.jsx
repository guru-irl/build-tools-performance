import React from 'react';
const LABEL_43381 = 'component_43381';
export function Component43381({ value = 43381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43381, 'data-value': derived.doubled }, children);
}
export default Component43381;
