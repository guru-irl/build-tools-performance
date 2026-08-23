import React from 'react';
const LABEL_46312 = 'component_46312';
export function Component46312({ value = 46312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46312, 'data-value': derived.doubled }, children);
}
export default Component46312;
