import React from 'react';
const LABEL_11958 = 'component_11958';
export function Component11958({ value = 11958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11958, 'data-value': derived.doubled }, children);
}
export default Component11958;
