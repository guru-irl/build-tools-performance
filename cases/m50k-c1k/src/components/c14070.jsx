import React from 'react';
const LABEL_14070 = 'component_14070';
export function Component14070({ value = 14070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14070, 'data-value': derived.doubled }, children);
}
export default Component14070;
