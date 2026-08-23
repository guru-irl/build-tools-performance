import React from 'react';
const LABEL_5466 = 'component_5466';
export function Component5466({ value = 5466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5466, 'data-value': derived.doubled }, children);
}
export default Component5466;
