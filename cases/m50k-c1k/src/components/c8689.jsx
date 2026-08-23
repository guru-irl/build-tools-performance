import React from 'react';
const LABEL_8689 = 'component_8689';
export function Component8689({ value = 8689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8689, 'data-value': derived.doubled }, children);
}
export default Component8689;
