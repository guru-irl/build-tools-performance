import React from 'react';
const LABEL_12855 = 'component_12855';
export function Component12855({ value = 12855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12855, 'data-value': derived.doubled }, children);
}
export default Component12855;
