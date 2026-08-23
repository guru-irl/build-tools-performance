import React from 'react';
const LABEL_22507 = 'component_22507';
export function Component22507({ value = 22507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22507, 'data-value': derived.doubled }, children);
}
export default Component22507;
