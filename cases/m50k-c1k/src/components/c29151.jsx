import React from 'react';
const LABEL_29151 = 'component_29151';
export function Component29151({ value = 29151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29151, 'data-value': derived.doubled }, children);
}
export default Component29151;
