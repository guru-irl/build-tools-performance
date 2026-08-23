import React from 'react';
const LABEL_43480 = 'component_43480';
export function Component43480({ value = 43480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43480, 'data-value': derived.doubled }, children);
}
export default Component43480;
