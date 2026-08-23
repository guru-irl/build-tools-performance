import React from 'react';
const LABEL_30692 = 'component_30692';
export function Component30692({ value = 30692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30692, 'data-value': derived.doubled }, children);
}
export default Component30692;
