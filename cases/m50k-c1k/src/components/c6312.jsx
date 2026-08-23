import React from 'react';
const LABEL_6312 = 'component_6312';
export function Component6312({ value = 6312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6312, 'data-value': derived.doubled }, children);
}
export default Component6312;
