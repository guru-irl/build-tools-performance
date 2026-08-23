import React from 'react';
const LABEL_38400 = 'component_38400';
export function Component38400({ value = 38400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38400, 'data-value': derived.doubled }, children);
}
export default Component38400;
