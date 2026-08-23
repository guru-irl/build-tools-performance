import React from 'react';
const LABEL_20557 = 'component_20557';
export function Component20557({ value = 20557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20557, 'data-value': derived.doubled }, children);
}
export default Component20557;
