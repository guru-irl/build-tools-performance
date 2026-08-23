import React from 'react';
const LABEL_42824 = 'component_42824';
export function Component42824({ value = 42824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42824, 'data-value': derived.doubled }, children);
}
export default Component42824;
