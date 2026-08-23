import React from 'react';
const LABEL_8042 = 'component_8042';
export function Component8042({ value = 8042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8042, 'data-value': derived.doubled }, children);
}
export default Component8042;
