import React from 'react';
const LABEL_38675 = 'component_38675';
export function Component38675({ value = 38675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38675, 'data-value': derived.doubled }, children);
}
export default Component38675;
