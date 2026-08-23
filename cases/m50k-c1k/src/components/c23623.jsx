import React from 'react';
const LABEL_23623 = 'component_23623';
export function Component23623({ value = 23623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23623, 'data-value': derived.doubled }, children);
}
export default Component23623;
