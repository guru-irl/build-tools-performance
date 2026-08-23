import React from 'react';
const LABEL_10740 = 'component_10740';
export function Component10740({ value = 10740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10740, 'data-value': derived.doubled }, children);
}
export default Component10740;
