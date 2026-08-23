import React from 'react';
const LABEL_8450 = 'component_8450';
export function Component8450({ value = 8450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8450, 'data-value': derived.doubled }, children);
}
export default Component8450;
