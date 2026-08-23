import React from 'react';
const LABEL_28304 = 'component_28304';
export function Component28304({ value = 28304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28304, 'data-value': derived.doubled }, children);
}
export default Component28304;
