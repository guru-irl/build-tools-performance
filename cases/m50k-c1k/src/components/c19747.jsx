import React from 'react';
const LABEL_19747 = 'component_19747';
export function Component19747({ value = 19747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19747, 'data-value': derived.doubled }, children);
}
export default Component19747;
