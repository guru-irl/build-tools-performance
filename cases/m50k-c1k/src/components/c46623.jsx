import React from 'react';
const LABEL_46623 = 'component_46623';
export function Component46623({ value = 46623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46623, 'data-value': derived.doubled }, children);
}
export default Component46623;
