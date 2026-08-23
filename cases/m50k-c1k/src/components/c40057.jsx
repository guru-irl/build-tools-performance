import React from 'react';
const LABEL_40057 = 'component_40057';
export function Component40057({ value = 40057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40057, 'data-value': derived.doubled }, children);
}
export default Component40057;
