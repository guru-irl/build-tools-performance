import React from 'react';
const LABEL_11943 = 'component_11943';
export function Component11943({ value = 11943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11943, 'data-value': derived.doubled }, children);
}
export default Component11943;
