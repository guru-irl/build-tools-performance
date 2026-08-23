import React from 'react';
const LABEL_26737 = 'component_26737';
export function Component26737({ value = 26737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26737, 'data-value': derived.doubled }, children);
}
export default Component26737;
