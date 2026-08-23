import React from 'react';
const LABEL_34744 = 'component_34744';
export function Component34744({ value = 34744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34744, 'data-value': derived.doubled }, children);
}
export default Component34744;
