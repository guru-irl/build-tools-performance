import React from 'react';
const LABEL_30083 = 'component_30083';
export function Component30083({ value = 30083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30083, 'data-value': derived.doubled }, children);
}
export default Component30083;
