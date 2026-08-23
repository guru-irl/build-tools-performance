import React from 'react';
const LABEL_19966 = 'component_19966';
export function Component19966({ value = 19966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19966, 'data-value': derived.doubled }, children);
}
export default Component19966;
