import React from 'react';
const LABEL_18070 = 'component_18070';
export function Component18070({ value = 18070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18070, 'data-value': derived.doubled }, children);
}
export default Component18070;
