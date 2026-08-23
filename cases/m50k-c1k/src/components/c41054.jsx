import React from 'react';
const LABEL_41054 = 'component_41054';
export function Component41054({ value = 41054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41054, 'data-value': derived.doubled }, children);
}
export default Component41054;
