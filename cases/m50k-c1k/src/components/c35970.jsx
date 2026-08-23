import React from 'react';
const LABEL_35970 = 'component_35970';
export function Component35970({ value = 35970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35970, 'data-value': derived.doubled }, children);
}
export default Component35970;
