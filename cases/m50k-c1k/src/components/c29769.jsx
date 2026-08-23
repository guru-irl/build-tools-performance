import React from 'react';
const LABEL_29769 = 'component_29769';
export function Component29769({ value = 29769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29769, 'data-value': derived.doubled }, children);
}
export default Component29769;
