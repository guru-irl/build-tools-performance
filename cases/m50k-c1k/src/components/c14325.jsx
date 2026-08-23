import React from 'react';
const LABEL_14325 = 'component_14325';
export function Component14325({ value = 14325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14325, 'data-value': derived.doubled }, children);
}
export default Component14325;
