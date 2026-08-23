import React from 'react';
const LABEL_16939 = 'component_16939';
export function Component16939({ value = 16939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16939, 'data-value': derived.doubled }, children);
}
export default Component16939;
