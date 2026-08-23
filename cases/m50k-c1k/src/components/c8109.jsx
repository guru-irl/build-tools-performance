import React from 'react';
const LABEL_8109 = 'component_8109';
export function Component8109({ value = 8109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8109, 'data-value': derived.doubled }, children);
}
export default Component8109;
