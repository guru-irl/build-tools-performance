import React from 'react';
const LABEL_19129 = 'component_19129';
export function Component19129({ value = 19129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19129, 'data-value': derived.doubled }, children);
}
export default Component19129;
