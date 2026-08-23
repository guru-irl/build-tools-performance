import React from 'react';
const LABEL_12173 = 'component_12173';
export function Component12173({ value = 12173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12173, 'data-value': derived.doubled }, children);
}
export default Component12173;
