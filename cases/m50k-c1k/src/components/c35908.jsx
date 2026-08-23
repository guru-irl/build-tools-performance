import React from 'react';
const LABEL_35908 = 'component_35908';
export function Component35908({ value = 35908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35908, 'data-value': derived.doubled }, children);
}
export default Component35908;
