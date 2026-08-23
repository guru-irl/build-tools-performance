import React from 'react';
const LABEL_35130 = 'component_35130';
export function Component35130({ value = 35130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35130, 'data-value': derived.doubled }, children);
}
export default Component35130;
