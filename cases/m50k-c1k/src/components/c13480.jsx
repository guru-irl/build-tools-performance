import React from 'react';
const LABEL_13480 = 'component_13480';
export function Component13480({ value = 13480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13480, 'data-value': derived.doubled }, children);
}
export default Component13480;
