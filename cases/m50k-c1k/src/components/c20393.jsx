import React from 'react';
const LABEL_20393 = 'component_20393';
export function Component20393({ value = 20393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20393, 'data-value': derived.doubled }, children);
}
export default Component20393;
