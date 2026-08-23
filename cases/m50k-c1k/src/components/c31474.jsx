import React from 'react';
const LABEL_31474 = 'component_31474';
export function Component31474({ value = 31474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31474, 'data-value': derived.doubled }, children);
}
export default Component31474;
