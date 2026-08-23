import React from 'react';
const LABEL_42671 = 'component_42671';
export function Component42671({ value = 42671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42671, 'data-value': derived.doubled }, children);
}
export default Component42671;
