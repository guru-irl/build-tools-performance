import React from 'react';
const LABEL_20665 = 'component_20665';
export function Component20665({ value = 20665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20665, 'data-value': derived.doubled }, children);
}
export default Component20665;
