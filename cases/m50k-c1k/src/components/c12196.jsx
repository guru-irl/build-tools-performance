import React from 'react';
const LABEL_12196 = 'component_12196';
export function Component12196({ value = 12196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12196, 'data-value': derived.doubled }, children);
}
export default Component12196;
