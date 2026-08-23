import React from 'react';
const LABEL_43788 = 'component_43788';
export function Component43788({ value = 43788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43788, 'data-value': derived.doubled }, children);
}
export default Component43788;
