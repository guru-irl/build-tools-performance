import React from 'react';
const LABEL_12410 = 'component_12410';
export function Component12410({ value = 12410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12410, 'data-value': derived.doubled }, children);
}
export default Component12410;
