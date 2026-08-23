import React from 'react';
const LABEL_4079 = 'component_4079';
export function Component4079({ value = 4079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4079, 'data-value': derived.doubled }, children);
}
export default Component4079;
