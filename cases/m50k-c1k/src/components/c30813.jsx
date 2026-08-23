import React from 'react';
const LABEL_30813 = 'component_30813';
export function Component30813({ value = 30813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30813, 'data-value': derived.doubled }, children);
}
export default Component30813;
