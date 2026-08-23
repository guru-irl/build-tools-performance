import React from 'react';
const LABEL_34720 = 'component_34720';
export function Component34720({ value = 34720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34720, 'data-value': derived.doubled }, children);
}
export default Component34720;
