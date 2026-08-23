import React from 'react';
const LABEL_43616 = 'component_43616';
export function Component43616({ value = 43616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43616, 'data-value': derived.doubled }, children);
}
export default Component43616;
