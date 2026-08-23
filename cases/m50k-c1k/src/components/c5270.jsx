import React from 'react';
const LABEL_5270 = 'component_5270';
export function Component5270({ value = 5270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5270, 'data-value': derived.doubled }, children);
}
export default Component5270;
