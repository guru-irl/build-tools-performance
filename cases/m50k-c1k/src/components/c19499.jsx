import React from 'react';
const LABEL_19499 = 'component_19499';
export function Component19499({ value = 19499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19499, 'data-value': derived.doubled }, children);
}
export default Component19499;
