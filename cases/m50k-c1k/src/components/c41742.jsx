import React from 'react';
const LABEL_41742 = 'component_41742';
export function Component41742({ value = 41742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41742, 'data-value': derived.doubled }, children);
}
export default Component41742;
