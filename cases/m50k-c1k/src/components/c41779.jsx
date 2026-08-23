import React from 'react';
const LABEL_41779 = 'component_41779';
export function Component41779({ value = 41779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41779, 'data-value': derived.doubled }, children);
}
export default Component41779;
