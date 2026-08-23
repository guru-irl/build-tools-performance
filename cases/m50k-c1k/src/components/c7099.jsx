import React from 'react';
const LABEL_7099 = 'component_7099';
export function Component7099({ value = 7099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7099, 'data-value': derived.doubled }, children);
}
export default Component7099;
