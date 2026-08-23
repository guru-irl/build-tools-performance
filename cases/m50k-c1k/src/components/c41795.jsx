import React from 'react';
const LABEL_41795 = 'component_41795';
export function Component41795({ value = 41795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41795, 'data-value': derived.doubled }, children);
}
export default Component41795;
