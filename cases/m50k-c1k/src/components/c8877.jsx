import React from 'react';
const LABEL_8877 = 'component_8877';
export function Component8877({ value = 8877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8877, 'data-value': derived.doubled }, children);
}
export default Component8877;
