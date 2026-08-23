import React from 'react';
const LABEL_35640 = 'component_35640';
export function Component35640({ value = 35640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35640, 'data-value': derived.doubled }, children);
}
export default Component35640;
