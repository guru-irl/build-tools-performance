import React from 'react';
const LABEL_14742 = 'component_14742';
export function Component14742({ value = 14742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14742, 'data-value': derived.doubled }, children);
}
export default Component14742;
