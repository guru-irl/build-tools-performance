import React from 'react';
const LABEL_30752 = 'component_30752';
export function Component30752({ value = 30752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30752, 'data-value': derived.doubled }, children);
}
export default Component30752;
