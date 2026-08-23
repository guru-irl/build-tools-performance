import React from 'react';
const LABEL_20556 = 'component_20556';
export function Component20556({ value = 20556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20556, 'data-value': derived.doubled }, children);
}
export default Component20556;
