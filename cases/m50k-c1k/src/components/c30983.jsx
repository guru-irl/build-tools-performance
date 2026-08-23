import React from 'react';
const LABEL_30983 = 'component_30983';
export function Component30983({ value = 30983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30983, 'data-value': derived.doubled }, children);
}
export default Component30983;
