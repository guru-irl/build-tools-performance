import React from 'react';
const LABEL_30402 = 'component_30402';
export function Component30402({ value = 30402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30402, 'data-value': derived.doubled }, children);
}
export default Component30402;
