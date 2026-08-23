import React from 'react';
const LABEL_6152 = 'component_6152';
export function Component6152({ value = 6152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6152, 'data-value': derived.doubled }, children);
}
export default Component6152;
