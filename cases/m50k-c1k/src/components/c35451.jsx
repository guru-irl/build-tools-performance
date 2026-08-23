import React from 'react';
const LABEL_35451 = 'component_35451';
export function Component35451({ value = 35451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35451, 'data-value': derived.doubled }, children);
}
export default Component35451;
