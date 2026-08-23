import React from 'react';
const LABEL_29312 = 'component_29312';
export function Component29312({ value = 29312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29312, 'data-value': derived.doubled }, children);
}
export default Component29312;
