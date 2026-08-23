import React from 'react';
const LABEL_20312 = 'component_20312';
export function Component20312({ value = 20312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20312, 'data-value': derived.doubled }, children);
}
export default Component20312;
