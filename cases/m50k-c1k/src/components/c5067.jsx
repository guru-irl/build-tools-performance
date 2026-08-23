import React from 'react';
const LABEL_5067 = 'component_5067';
export function Component5067({ value = 5067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5067, 'data-value': derived.doubled }, children);
}
export default Component5067;
