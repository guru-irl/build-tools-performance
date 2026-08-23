import React from 'react';
const LABEL_42742 = 'component_42742';
export function Component42742({ value = 42742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42742, 'data-value': derived.doubled }, children);
}
export default Component42742;
