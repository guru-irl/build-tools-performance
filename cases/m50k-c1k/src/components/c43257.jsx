import React from 'react';
const LABEL_43257 = 'component_43257';
export function Component43257({ value = 43257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43257, 'data-value': derived.doubled }, children);
}
export default Component43257;
