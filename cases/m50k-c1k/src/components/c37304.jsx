import React from 'react';
const LABEL_37304 = 'component_37304';
export function Component37304({ value = 37304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37304, 'data-value': derived.doubled }, children);
}
export default Component37304;
