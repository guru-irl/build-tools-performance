import React from 'react';
const LABEL_621 = 'component_621';
export function Component621({ value = 621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_621, 'data-value': derived.doubled }, children);
}
export default Component621;
