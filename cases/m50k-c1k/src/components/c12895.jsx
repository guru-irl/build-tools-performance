import React from 'react';
const LABEL_12895 = 'component_12895';
export function Component12895({ value = 12895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12895, 'data-value': derived.doubled }, children);
}
export default Component12895;
