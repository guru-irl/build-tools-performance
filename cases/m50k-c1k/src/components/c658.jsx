import React from 'react';
const LABEL_658 = 'component_658';
export function Component658({ value = 658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_658, 'data-value': derived.doubled }, children);
}
export default Component658;
