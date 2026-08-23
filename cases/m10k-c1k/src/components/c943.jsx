import React from 'react';
const LABEL_943 = 'component_943';
export function Component943({ value = 943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_943, 'data-value': derived.doubled }, children);
}
export default Component943;
