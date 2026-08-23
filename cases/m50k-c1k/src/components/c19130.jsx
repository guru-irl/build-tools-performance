import React from 'react';
const LABEL_19130 = 'component_19130';
export function Component19130({ value = 19130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19130, 'data-value': derived.doubled }, children);
}
export default Component19130;
