import React from 'react';
const LABEL_44514 = 'component_44514';
export function Component44514({ value = 44514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44514, 'data-value': derived.doubled }, children);
}
export default Component44514;
