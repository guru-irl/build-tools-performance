import React from 'react';
const LABEL_34575 = 'component_34575';
export function Component34575({ value = 34575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34575, 'data-value': derived.doubled }, children);
}
export default Component34575;
