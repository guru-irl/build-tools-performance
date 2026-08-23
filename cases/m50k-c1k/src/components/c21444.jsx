import React from 'react';
const LABEL_21444 = 'component_21444';
export function Component21444({ value = 21444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21444, 'data-value': derived.doubled }, children);
}
export default Component21444;
