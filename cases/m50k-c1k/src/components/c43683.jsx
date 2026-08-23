import React from 'react';
const LABEL_43683 = 'component_43683';
export function Component43683({ value = 43683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43683, 'data-value': derived.doubled }, children);
}
export default Component43683;
