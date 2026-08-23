import React from 'react';
const LABEL_45708 = 'component_45708';
export function Component45708({ value = 45708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45708, 'data-value': derived.doubled }, children);
}
export default Component45708;
