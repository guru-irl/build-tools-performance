import React from 'react';
const LABEL_19159 = 'component_19159';
export function Component19159({ value = 19159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19159, 'data-value': derived.doubled }, children);
}
export default Component19159;
