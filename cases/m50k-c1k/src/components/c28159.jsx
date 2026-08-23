import React from 'react';
const LABEL_28159 = 'component_28159';
export function Component28159({ value = 28159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28159, 'data-value': derived.doubled }, children);
}
export default Component28159;
