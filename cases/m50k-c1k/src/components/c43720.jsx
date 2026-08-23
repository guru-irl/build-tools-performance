import React from 'react';
const LABEL_43720 = 'component_43720';
export function Component43720({ value = 43720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43720, 'data-value': derived.doubled }, children);
}
export default Component43720;
