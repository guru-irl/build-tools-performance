import React from 'react';
const LABEL_30687 = 'component_30687';
export function Component30687({ value = 30687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30687, 'data-value': derived.doubled }, children);
}
export default Component30687;
