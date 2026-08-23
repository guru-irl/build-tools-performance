import React from 'react';
const LABEL_30130 = 'component_30130';
export function Component30130({ value = 30130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30130, 'data-value': derived.doubled }, children);
}
export default Component30130;
