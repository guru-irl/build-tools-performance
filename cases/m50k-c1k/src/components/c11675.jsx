import React from 'react';
const LABEL_11675 = 'component_11675';
export function Component11675({ value = 11675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11675, 'data-value': derived.doubled }, children);
}
export default Component11675;
