import React from 'react';
const LABEL_29883 = 'component_29883';
export function Component29883({ value = 29883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29883, 'data-value': derived.doubled }, children);
}
export default Component29883;
