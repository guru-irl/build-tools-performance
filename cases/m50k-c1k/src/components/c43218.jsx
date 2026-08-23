import React from 'react';
const LABEL_43218 = 'component_43218';
export function Component43218({ value = 43218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43218, 'data-value': derived.doubled }, children);
}
export default Component43218;
