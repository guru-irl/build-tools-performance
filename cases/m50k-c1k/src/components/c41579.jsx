import React from 'react';
const LABEL_41579 = 'component_41579';
export function Component41579({ value = 41579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41579, 'data-value': derived.doubled }, children);
}
export default Component41579;
