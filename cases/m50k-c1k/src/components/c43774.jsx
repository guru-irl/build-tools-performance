import React from 'react';
const LABEL_43774 = 'component_43774';
export function Component43774({ value = 43774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43774, 'data-value': derived.doubled }, children);
}
export default Component43774;
