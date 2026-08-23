import React from 'react';
const LABEL_20137 = 'component_20137';
export function Component20137({ value = 20137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20137, 'data-value': derived.doubled }, children);
}
export default Component20137;
