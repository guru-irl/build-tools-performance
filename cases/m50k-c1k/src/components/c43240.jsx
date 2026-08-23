import React from 'react';
const LABEL_43240 = 'component_43240';
export function Component43240({ value = 43240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43240, 'data-value': derived.doubled }, children);
}
export default Component43240;
