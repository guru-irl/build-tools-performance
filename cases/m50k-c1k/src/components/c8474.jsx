import React from 'react';
const LABEL_8474 = 'component_8474';
export function Component8474({ value = 8474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8474, 'data-value': derived.doubled }, children);
}
export default Component8474;
