import React from 'react';
const LABEL_7708 = 'component_7708';
export function Component7708({ value = 7708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7708, 'data-value': derived.doubled }, children);
}
export default Component7708;
