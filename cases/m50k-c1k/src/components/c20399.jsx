import React from 'react';
const LABEL_20399 = 'component_20399';
export function Component20399({ value = 20399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20399, 'data-value': derived.doubled }, children);
}
export default Component20399;
