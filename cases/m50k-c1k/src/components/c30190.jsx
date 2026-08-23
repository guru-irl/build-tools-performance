import React from 'react';
const LABEL_30190 = 'component_30190';
export function Component30190({ value = 30190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30190, 'data-value': derived.doubled }, children);
}
export default Component30190;
