import React from 'react';
const LABEL_43708 = 'component_43708';
export function Component43708({ value = 43708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43708, 'data-value': derived.doubled }, children);
}
export default Component43708;
