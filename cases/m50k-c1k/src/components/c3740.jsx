import React from 'react';
const LABEL_3740 = 'component_3740';
export function Component3740({ value = 3740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3740, 'data-value': derived.doubled }, children);
}
export default Component3740;
