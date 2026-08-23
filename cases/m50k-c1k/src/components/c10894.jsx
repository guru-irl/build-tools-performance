import React from 'react';
const LABEL_10894 = 'component_10894';
export function Component10894({ value = 10894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10894, 'data-value': derived.doubled }, children);
}
export default Component10894;
