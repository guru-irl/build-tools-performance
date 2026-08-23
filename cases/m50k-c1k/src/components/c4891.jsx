import React from 'react';
const LABEL_4891 = 'component_4891';
export function Component4891({ value = 4891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4891, 'data-value': derived.doubled }, children);
}
export default Component4891;
