import React from 'react';
const LABEL_3507 = 'component_3507';
export function Component3507({ value = 3507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3507, 'data-value': derived.doubled }, children);
}
export default Component3507;
