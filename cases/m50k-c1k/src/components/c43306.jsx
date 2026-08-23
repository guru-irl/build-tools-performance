import React from 'react';
const LABEL_43306 = 'component_43306';
export function Component43306({ value = 43306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43306, 'data-value': derived.doubled }, children);
}
export default Component43306;
