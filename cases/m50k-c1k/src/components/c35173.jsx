import React from 'react';
const LABEL_35173 = 'component_35173';
export function Component35173({ value = 35173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35173, 'data-value': derived.doubled }, children);
}
export default Component35173;
