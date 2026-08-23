import React from 'react';
const LABEL_19149 = 'component_19149';
export function Component19149({ value = 19149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19149, 'data-value': derived.doubled }, children);
}
export default Component19149;
