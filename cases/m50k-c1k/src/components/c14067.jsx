import React from 'react';
const LABEL_14067 = 'component_14067';
export function Component14067({ value = 14067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14067, 'data-value': derived.doubled }, children);
}
export default Component14067;
