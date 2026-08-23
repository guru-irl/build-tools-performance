import React from 'react';
const LABEL_675 = 'component_675';
export function Component675({ value = 675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_675, 'data-value': derived.doubled }, children);
}
export default Component675;
