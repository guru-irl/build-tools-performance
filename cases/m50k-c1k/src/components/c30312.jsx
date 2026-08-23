import React from 'react';
const LABEL_30312 = 'component_30312';
export function Component30312({ value = 30312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30312, 'data-value': derived.doubled }, children);
}
export default Component30312;
