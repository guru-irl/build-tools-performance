import React from 'react';
const LABEL_8171 = 'component_8171';
export function Component8171({ value = 8171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8171, 'data-value': derived.doubled }, children);
}
export default Component8171;
