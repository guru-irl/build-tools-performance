import React from 'react';
const LABEL_23331 = 'component_23331';
export function Component23331({ value = 23331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23331, 'data-value': derived.doubled }, children);
}
export default Component23331;
