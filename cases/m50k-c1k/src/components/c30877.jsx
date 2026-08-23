import React from 'react';
const LABEL_30877 = 'component_30877';
export function Component30877({ value = 30877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30877, 'data-value': derived.doubled }, children);
}
export default Component30877;
