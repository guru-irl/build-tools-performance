import React from 'react';
const LABEL_16365 = 'component_16365';
export function Component16365({ value = 16365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16365, 'data-value': derived.doubled }, children);
}
export default Component16365;
