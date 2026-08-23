import React from 'react';
const LABEL_37856 = 'component_37856';
export function Component37856({ value = 37856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37856, 'data-value': derived.doubled }, children);
}
export default Component37856;
