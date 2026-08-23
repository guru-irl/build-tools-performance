import React from 'react';
const LABEL_43546 = 'component_43546';
export function Component43546({ value = 43546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43546, 'data-value': derived.doubled }, children);
}
export default Component43546;
