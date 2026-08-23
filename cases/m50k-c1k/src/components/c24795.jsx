import React from 'react';
const LABEL_24795 = 'component_24795';
export function Component24795({ value = 24795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24795, 'data-value': derived.doubled }, children);
}
export default Component24795;
