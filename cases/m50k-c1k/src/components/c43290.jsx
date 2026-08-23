import React from 'react';
const LABEL_43290 = 'component_43290';
export function Component43290({ value = 43290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43290, 'data-value': derived.doubled }, children);
}
export default Component43290;
