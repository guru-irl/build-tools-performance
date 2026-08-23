import React from 'react';
const LABEL_588 = 'component_588';
export function Component588({ value = 588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_588, 'data-value': derived.doubled }, children);
}
export default Component588;
