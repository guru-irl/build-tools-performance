import React from 'react';
const LABEL_21349 = 'component_21349';
export function Component21349({ value = 21349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21349, 'data-value': derived.doubled }, children);
}
export default Component21349;
