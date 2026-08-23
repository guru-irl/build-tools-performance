import React from 'react';
const LABEL_30543 = 'component_30543';
export function Component30543({ value = 30543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30543, 'data-value': derived.doubled }, children);
}
export default Component30543;
