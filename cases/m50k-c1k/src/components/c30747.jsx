import React from 'react';
const LABEL_30747 = 'component_30747';
export function Component30747({ value = 30747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30747, 'data-value': derived.doubled }, children);
}
export default Component30747;
