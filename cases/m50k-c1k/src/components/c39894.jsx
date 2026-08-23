import React from 'react';
const LABEL_39894 = 'component_39894';
export function Component39894({ value = 39894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39894, 'data-value': derived.doubled }, children);
}
export default Component39894;
