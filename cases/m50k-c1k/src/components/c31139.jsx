import React from 'react';
const LABEL_31139 = 'component_31139';
export function Component31139({ value = 31139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31139, 'data-value': derived.doubled }, children);
}
export default Component31139;
