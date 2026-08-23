import React from 'react';
const LABEL_5070 = 'component_5070';
export function Component5070({ value = 5070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5070, 'data-value': derived.doubled }, children);
}
export default Component5070;
