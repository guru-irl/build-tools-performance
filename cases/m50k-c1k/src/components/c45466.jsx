import React from 'react';
const LABEL_45466 = 'component_45466';
export function Component45466({ value = 45466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45466, 'data-value': derived.doubled }, children);
}
export default Component45466;
