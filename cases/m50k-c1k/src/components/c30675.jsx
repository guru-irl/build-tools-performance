import React from 'react';
const LABEL_30675 = 'component_30675';
export function Component30675({ value = 30675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30675, 'data-value': derived.doubled }, children);
}
export default Component30675;
