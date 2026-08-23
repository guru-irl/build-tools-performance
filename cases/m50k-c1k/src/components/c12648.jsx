import React from 'react';
const LABEL_12648 = 'component_12648';
export function Component12648({ value = 12648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12648, 'data-value': derived.doubled }, children);
}
export default Component12648;
