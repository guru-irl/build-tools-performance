import React from 'react';
const LABEL_30107 = 'component_30107';
export function Component30107({ value = 30107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30107, 'data-value': derived.doubled }, children);
}
export default Component30107;
