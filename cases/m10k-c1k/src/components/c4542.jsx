import React from 'react';
const LABEL_4542 = 'component_4542';
export function Component4542({ value = 4542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4542, 'data-value': derived.doubled }, children);
}
export default Component4542;
