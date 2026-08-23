import React from 'react';
const LABEL_12642 = 'component_12642';
export function Component12642({ value = 12642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12642, 'data-value': derived.doubled }, children);
}
export default Component12642;
