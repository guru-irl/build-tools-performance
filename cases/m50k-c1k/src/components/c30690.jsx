import React from 'react';
const LABEL_30690 = 'component_30690';
export function Component30690({ value = 30690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30690, 'data-value': derived.doubled }, children);
}
export default Component30690;
