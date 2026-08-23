import React from 'react';
const LABEL_25905 = 'component_25905';
export function Component25905({ value = 25905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25905, 'data-value': derived.doubled }, children);
}
export default Component25905;
