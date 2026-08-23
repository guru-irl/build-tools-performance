import React from 'react';
const LABEL_36067 = 'component_36067';
export function Component36067({ value = 36067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36067, 'data-value': derived.doubled }, children);
}
export default Component36067;
