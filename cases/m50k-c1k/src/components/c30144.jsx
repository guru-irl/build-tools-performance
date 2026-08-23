import React from 'react';
const LABEL_30144 = 'component_30144';
export function Component30144({ value = 30144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30144, 'data-value': derived.doubled }, children);
}
export default Component30144;
