import React from 'react';
const LABEL_35444 = 'component_35444';
export function Component35444({ value = 35444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35444, 'data-value': derived.doubled }, children);
}
export default Component35444;
