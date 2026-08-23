import React from 'react';
const LABEL_30308 = 'component_30308';
export function Component30308({ value = 30308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30308, 'data-value': derived.doubled }, children);
}
export default Component30308;
