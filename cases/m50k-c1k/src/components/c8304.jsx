import React from 'react';
const LABEL_8304 = 'component_8304';
export function Component8304({ value = 8304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8304, 'data-value': derived.doubled }, children);
}
export default Component8304;
