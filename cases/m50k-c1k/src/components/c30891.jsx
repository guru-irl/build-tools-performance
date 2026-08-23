import React from 'react';
const LABEL_30891 = 'component_30891';
export function Component30891({ value = 30891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30891, 'data-value': derived.doubled }, children);
}
export default Component30891;
