import React from 'react';
const LABEL_42304 = 'component_42304';
export function Component42304({ value = 42304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42304, 'data-value': derived.doubled }, children);
}
export default Component42304;
