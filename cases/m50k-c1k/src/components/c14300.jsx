import React from 'react';
const LABEL_14300 = 'component_14300';
export function Component14300({ value = 14300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14300, 'data-value': derived.doubled }, children);
}
export default Component14300;
