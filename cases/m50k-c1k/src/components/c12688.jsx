import React from 'react';
const LABEL_12688 = 'component_12688';
export function Component12688({ value = 12688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12688, 'data-value': derived.doubled }, children);
}
export default Component12688;
