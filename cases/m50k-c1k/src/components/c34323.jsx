import React from 'react';
const LABEL_34323 = 'component_34323';
export function Component34323({ value = 34323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34323, 'data-value': derived.doubled }, children);
}
export default Component34323;
