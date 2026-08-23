import React from 'react';
const LABEL_4932 = 'component_4932';
export function Component4932({ value = 4932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4932, 'data-value': derived.doubled }, children);
}
export default Component4932;
