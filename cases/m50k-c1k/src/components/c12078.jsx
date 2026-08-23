import React from 'react';
const LABEL_12078 = 'component_12078';
export function Component12078({ value = 12078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12078, 'data-value': derived.doubled }, children);
}
export default Component12078;
