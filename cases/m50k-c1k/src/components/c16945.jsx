import React from 'react';
const LABEL_16945 = 'component_16945';
export function Component16945({ value = 16945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16945, 'data-value': derived.doubled }, children);
}
export default Component16945;
