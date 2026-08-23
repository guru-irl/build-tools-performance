import React from 'react';
const LABEL_30285 = 'component_30285';
export function Component30285({ value = 30285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30285, 'data-value': derived.doubled }, children);
}
export default Component30285;
