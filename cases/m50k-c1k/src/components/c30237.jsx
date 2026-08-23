import React from 'react';
const LABEL_30237 = 'component_30237';
export function Component30237({ value = 30237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30237, 'data-value': derived.doubled }, children);
}
export default Component30237;
