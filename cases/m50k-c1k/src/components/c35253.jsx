import React from 'react';
const LABEL_35253 = 'component_35253';
export function Component35253({ value = 35253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35253, 'data-value': derived.doubled }, children);
}
export default Component35253;
