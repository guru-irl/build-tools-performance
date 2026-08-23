import React from 'react';
const LABEL_37585 = 'component_37585';
export function Component37585({ value = 37585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37585, 'data-value': derived.doubled }, children);
}
export default Component37585;
