import React from 'react';
const LABEL_22870 = 'component_22870';
export function Component22870({ value = 22870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22870, 'data-value': derived.doubled }, children);
}
export default Component22870;
