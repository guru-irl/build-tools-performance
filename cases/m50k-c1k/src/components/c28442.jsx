import React from 'react';
const LABEL_28442 = 'component_28442';
export function Component28442({ value = 28442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28442, 'data-value': derived.doubled }, children);
}
export default Component28442;
