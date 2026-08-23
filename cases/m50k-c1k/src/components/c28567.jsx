import React from 'react';
const LABEL_28567 = 'component_28567';
export function Component28567({ value = 28567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28567, 'data-value': derived.doubled }, children);
}
export default Component28567;
