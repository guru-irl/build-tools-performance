import React from 'react';
const LABEL_28507 = 'component_28507';
export function Component28507({ value = 28507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28507, 'data-value': derived.doubled }, children);
}
export default Component28507;
