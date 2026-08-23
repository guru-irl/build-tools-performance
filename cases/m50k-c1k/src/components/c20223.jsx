import React from 'react';
const LABEL_20223 = 'component_20223';
export function Component20223({ value = 20223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20223, 'data-value': derived.doubled }, children);
}
export default Component20223;
