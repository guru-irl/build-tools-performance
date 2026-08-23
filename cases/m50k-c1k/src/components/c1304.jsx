import React from 'react';
const LABEL_1304 = 'component_1304';
export function Component1304({ value = 1304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1304, 'data-value': derived.doubled }, children);
}
export default Component1304;
