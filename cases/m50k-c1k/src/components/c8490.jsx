import React from 'react';
const LABEL_8490 = 'component_8490';
export function Component8490({ value = 8490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8490, 'data-value': derived.doubled }, children);
}
export default Component8490;
