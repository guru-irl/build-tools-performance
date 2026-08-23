import React from 'react';
const LABEL_45393 = 'component_45393';
export function Component45393({ value = 45393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45393, 'data-value': derived.doubled }, children);
}
export default Component45393;
