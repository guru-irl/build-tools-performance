import React from 'react';
const LABEL_5005 = 'component_5005';
export function Component5005({ value = 5005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5005, 'data-value': derived.doubled }, children);
}
export default Component5005;
