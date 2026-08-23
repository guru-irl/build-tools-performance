import React from 'react';
const LABEL_43691 = 'component_43691';
export function Component43691({ value = 43691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43691, 'data-value': derived.doubled }, children);
}
export default Component43691;
