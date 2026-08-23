import React from 'react';
const LABEL_30872 = 'component_30872';
export function Component30872({ value = 30872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30872, 'data-value': derived.doubled }, children);
}
export default Component30872;
