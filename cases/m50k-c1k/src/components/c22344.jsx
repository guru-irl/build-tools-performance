import React from 'react';
const LABEL_22344 = 'component_22344';
export function Component22344({ value = 22344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22344, 'data-value': derived.doubled }, children);
}
export default Component22344;
