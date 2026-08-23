import React from 'react';
const LABEL_30090 = 'component_30090';
export function Component30090({ value = 30090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30090, 'data-value': derived.doubled }, children);
}
export default Component30090;
