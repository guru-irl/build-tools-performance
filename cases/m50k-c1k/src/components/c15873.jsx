import React from 'react';
const LABEL_15873 = 'component_15873';
export function Component15873({ value = 15873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15873, 'data-value': derived.doubled }, children);
}
export default Component15873;
