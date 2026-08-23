import React from 'react';
const LABEL_34675 = 'component_34675';
export function Component34675({ value = 34675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34675, 'data-value': derived.doubled }, children);
}
export default Component34675;
