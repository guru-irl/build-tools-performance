import React from 'react';
const LABEL_38884 = 'component_38884';
export function Component38884({ value = 38884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38884, 'data-value': derived.doubled }, children);
}
export default Component38884;
