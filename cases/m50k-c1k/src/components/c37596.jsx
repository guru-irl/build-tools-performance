import React from 'react';
const LABEL_37596 = 'component_37596';
export function Component37596({ value = 37596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37596, 'data-value': derived.doubled }, children);
}
export default Component37596;
