import React from 'react';
const LABEL_33588 = 'component_33588';
export function Component33588({ value = 33588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33588, 'data-value': derived.doubled }, children);
}
export default Component33588;
