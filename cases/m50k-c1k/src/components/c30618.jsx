import React from 'react';
const LABEL_30618 = 'component_30618';
export function Component30618({ value = 30618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30618, 'data-value': derived.doubled }, children);
}
export default Component30618;
