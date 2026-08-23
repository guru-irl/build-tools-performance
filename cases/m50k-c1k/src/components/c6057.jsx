import React from 'react';
const LABEL_6057 = 'component_6057';
export function Component6057({ value = 6057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6057, 'data-value': derived.doubled }, children);
}
export default Component6057;
