import React from 'react';
const LABEL_41891 = 'component_41891';
export function Component41891({ value = 41891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41891, 'data-value': derived.doubled }, children);
}
export default Component41891;
