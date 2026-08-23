import React from 'react';
const LABEL_22837 = 'component_22837';
export function Component22837({ value = 22837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22837, 'data-value': derived.doubled }, children);
}
export default Component22837;
