import React from 'react';
const LABEL_39378 = 'component_39378';
export function Component39378({ value = 39378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39378, 'data-value': derived.doubled }, children);
}
export default Component39378;
