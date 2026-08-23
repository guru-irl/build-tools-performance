import React from 'react';
const LABEL_37444 = 'component_37444';
export function Component37444({ value = 37444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37444, 'data-value': derived.doubled }, children);
}
export default Component37444;
