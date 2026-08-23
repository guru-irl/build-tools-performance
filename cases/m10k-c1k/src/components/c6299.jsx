import React from 'react';
const LABEL_6299 = 'component_6299';
export function Component6299({ value = 6299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6299, 'data-value': derived.doubled }, children);
}
export default Component6299;
