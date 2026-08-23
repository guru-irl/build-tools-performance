import React from 'react';
const LABEL_20160 = 'component_20160';
export function Component20160({ value = 20160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20160, 'data-value': derived.doubled }, children);
}
export default Component20160;
