import React from 'react';
const LABEL_30241 = 'component_30241';
export function Component30241({ value = 30241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30241, 'data-value': derived.doubled }, children);
}
export default Component30241;
