import React from 'react';
const LABEL_44585 = 'component_44585';
export function Component44585({ value = 44585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44585, 'data-value': derived.doubled }, children);
}
export default Component44585;
