import React from 'react';
const LABEL_19710 = 'component_19710';
export function Component19710({ value = 19710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19710, 'data-value': derived.doubled }, children);
}
export default Component19710;
