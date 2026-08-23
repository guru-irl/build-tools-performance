import React from 'react';
const LABEL_19372 = 'component_19372';
export function Component19372({ value = 19372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19372, 'data-value': derived.doubled }, children);
}
export default Component19372;
