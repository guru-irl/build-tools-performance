import React from 'react';
const LABEL_18655 = 'component_18655';
export function Component18655({ value = 18655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18655, 'data-value': derived.doubled }, children);
}
export default Component18655;
