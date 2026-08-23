import React from 'react';
const LABEL_41382 = 'component_41382';
export function Component41382({ value = 41382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41382, 'data-value': derived.doubled }, children);
}
export default Component41382;
