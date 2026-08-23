import React from 'react';
const LABEL_11067 = 'component_11067';
export function Component11067({ value = 11067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11067, 'data-value': derived.doubled }, children);
}
export default Component11067;
