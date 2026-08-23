import React from 'react';
const LABEL_566 = 'component_566';
export function Component566({ value = 566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_566, 'data-value': derived.doubled }, children);
}
export default Component566;
