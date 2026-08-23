import React from 'react';
const LABEL_20458 = 'component_20458';
export function Component20458({ value = 20458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20458, 'data-value': derived.doubled }, children);
}
export default Component20458;
