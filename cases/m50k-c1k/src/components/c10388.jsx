import React from 'react';
const LABEL_10388 = 'component_10388';
export function Component10388({ value = 10388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10388, 'data-value': derived.doubled }, children);
}
export default Component10388;
