import React from 'react';
const LABEL_43556 = 'component_43556';
export function Component43556({ value = 43556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43556, 'data-value': derived.doubled }, children);
}
export default Component43556;
