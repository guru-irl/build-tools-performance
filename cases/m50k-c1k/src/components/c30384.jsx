import React from 'react';
const LABEL_30384 = 'component_30384';
export function Component30384({ value = 30384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30384, 'data-value': derived.doubled }, children);
}
export default Component30384;
