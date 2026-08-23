import React from 'react';
const LABEL_8804 = 'component_8804';
export function Component8804({ value = 8804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8804, 'data-value': derived.doubled }, children);
}
export default Component8804;
