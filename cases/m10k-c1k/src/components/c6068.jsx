import React from 'react';
const LABEL_6068 = 'component_6068';
export function Component6068({ value = 6068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6068, 'data-value': derived.doubled }, children);
}
export default Component6068;
