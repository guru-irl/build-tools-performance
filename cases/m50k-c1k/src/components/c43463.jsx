import React from 'react';
const LABEL_43463 = 'component_43463';
export function Component43463({ value = 43463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43463, 'data-value': derived.doubled }, children);
}
export default Component43463;
