import React from 'react';
const LABEL_19127 = 'component_19127';
export function Component19127({ value = 19127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19127, 'data-value': derived.doubled }, children);
}
export default Component19127;
