import React from 'react';
const LABEL_1536 = 'component_1536';
export function Component1536({ value = 1536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1536, 'data-value': derived.doubled }, children);
}
export default Component1536;
