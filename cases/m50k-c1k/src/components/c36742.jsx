import React from 'react';
const LABEL_36742 = 'component_36742';
export function Component36742({ value = 36742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36742, 'data-value': derived.doubled }, children);
}
export default Component36742;
