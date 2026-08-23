import React from 'react';
const LABEL_30788 = 'component_30788';
export function Component30788({ value = 30788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30788, 'data-value': derived.doubled }, children);
}
export default Component30788;
