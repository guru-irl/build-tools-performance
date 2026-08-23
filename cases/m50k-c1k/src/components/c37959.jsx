import React from 'react';
const LABEL_37959 = 'component_37959';
export function Component37959({ value = 37959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37959, 'data-value': derived.doubled }, children);
}
export default Component37959;
