import React from 'react';
const LABEL_12933 = 'component_12933';
export function Component12933({ value = 12933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12933, 'data-value': derived.doubled }, children);
}
export default Component12933;
