import React from 'react';
const LABEL_43458 = 'component_43458';
export function Component43458({ value = 43458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43458, 'data-value': derived.doubled }, children);
}
export default Component43458;
