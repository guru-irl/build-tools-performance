import React from 'react';
const LABEL_37155 = 'component_37155';
export function Component37155({ value = 37155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37155, 'data-value': derived.doubled }, children);
}
export default Component37155;
