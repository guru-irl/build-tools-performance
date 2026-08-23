import React from 'react';
const LABEL_30188 = 'component_30188';
export function Component30188({ value = 30188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30188, 'data-value': derived.doubled }, children);
}
export default Component30188;
