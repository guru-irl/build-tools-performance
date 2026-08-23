import React from 'react';
const LABEL_480 = 'component_480';
export function Component480({ value = 480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_480, 'data-value': derived.doubled }, children);
}
export default Component480;
