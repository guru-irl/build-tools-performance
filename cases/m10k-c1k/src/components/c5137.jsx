import React from 'react';
const LABEL_5137 = 'component_5137';
export function Component5137({ value = 5137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5137, 'data-value': derived.doubled }, children);
}
export default Component5137;
