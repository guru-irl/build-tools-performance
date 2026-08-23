import React from 'react';
const LABEL_32304 = 'component_32304';
export function Component32304({ value = 32304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32304, 'data-value': derived.doubled }, children);
}
export default Component32304;
