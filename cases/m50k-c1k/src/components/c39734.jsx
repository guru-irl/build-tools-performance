import React from 'react';
const LABEL_39734 = 'component_39734';
export function Component39734({ value = 39734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39734, 'data-value': derived.doubled }, children);
}
export default Component39734;
