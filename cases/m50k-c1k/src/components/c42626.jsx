import React from 'react';
const LABEL_42626 = 'component_42626';
export function Component42626({ value = 42626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42626, 'data-value': derived.doubled }, children);
}
export default Component42626;
