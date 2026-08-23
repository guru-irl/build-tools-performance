import React from 'react';
const LABEL_30306 = 'component_30306';
export function Component30306({ value = 30306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30306, 'data-value': derived.doubled }, children);
}
export default Component30306;
