import React from 'react';
const LABEL_30393 = 'component_30393';
export function Component30393({ value = 30393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30393, 'data-value': derived.doubled }, children);
}
export default Component30393;
