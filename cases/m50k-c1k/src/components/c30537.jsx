import React from 'react';
const LABEL_30537 = 'component_30537';
export function Component30537({ value = 30537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30537, 'data-value': derived.doubled }, children);
}
export default Component30537;
