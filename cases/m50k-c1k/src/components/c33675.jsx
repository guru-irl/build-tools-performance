import React from 'react';
const LABEL_33675 = 'component_33675';
export function Component33675({ value = 33675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33675, 'data-value': derived.doubled }, children);
}
export default Component33675;
