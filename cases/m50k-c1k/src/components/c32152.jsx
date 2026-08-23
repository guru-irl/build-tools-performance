import React from 'react';
const LABEL_32152 = 'component_32152';
export function Component32152({ value = 32152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32152, 'data-value': derived.doubled }, children);
}
export default Component32152;
