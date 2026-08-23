import React from 'react';
const LABEL_30180 = 'component_30180';
export function Component30180({ value = 30180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30180, 'data-value': derived.doubled }, children);
}
export default Component30180;
