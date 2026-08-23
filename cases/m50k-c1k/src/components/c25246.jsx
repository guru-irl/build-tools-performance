import React from 'react';
const LABEL_25246 = 'component_25246';
export function Component25246({ value = 25246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25246, 'data-value': derived.doubled }, children);
}
export default Component25246;
