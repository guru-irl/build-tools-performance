import React from 'react';
const LABEL_5621 = 'component_5621';
export function Component5621({ value = 5621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5621, 'data-value': derived.doubled }, children);
}
export default Component5621;
