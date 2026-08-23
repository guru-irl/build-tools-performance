import React from 'react';
const LABEL_44507 = 'component_44507';
export function Component44507({ value = 44507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44507, 'data-value': derived.doubled }, children);
}
export default Component44507;
