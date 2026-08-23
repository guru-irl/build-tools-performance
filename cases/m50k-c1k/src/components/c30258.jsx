import React from 'react';
const LABEL_30258 = 'component_30258';
export function Component30258({ value = 30258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30258, 'data-value': derived.doubled }, children);
}
export default Component30258;
