import React from 'react';
const LABEL_12056 = 'component_12056';
export function Component12056({ value = 12056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12056, 'data-value': derived.doubled }, children);
}
export default Component12056;
