import React from 'react';
const LABEL_46365 = 'component_46365';
export function Component46365({ value = 46365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46365, 'data-value': derived.doubled }, children);
}
export default Component46365;
