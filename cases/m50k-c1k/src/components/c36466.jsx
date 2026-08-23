import React from 'react';
const LABEL_36466 = 'component_36466';
export function Component36466({ value = 36466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36466, 'data-value': derived.doubled }, children);
}
export default Component36466;
