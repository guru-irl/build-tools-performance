import React from 'react';
const LABEL_40891 = 'component_40891';
export function Component40891({ value = 40891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40891, 'data-value': derived.doubled }, children);
}
export default Component40891;
