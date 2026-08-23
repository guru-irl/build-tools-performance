import React from 'react';
const LABEL_30736 = 'component_30736';
export function Component30736({ value = 30736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30736, 'data-value': derived.doubled }, children);
}
export default Component30736;
