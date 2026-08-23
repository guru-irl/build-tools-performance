import React from 'react';
const LABEL_14536 = 'component_14536';
export function Component14536({ value = 14536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14536, 'data-value': derived.doubled }, children);
}
export default Component14536;
