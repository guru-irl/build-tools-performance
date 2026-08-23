import React from 'react';
const LABEL_8180 = 'component_8180';
export function Component8180({ value = 8180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8180, 'data-value': derived.doubled }, children);
}
export default Component8180;
