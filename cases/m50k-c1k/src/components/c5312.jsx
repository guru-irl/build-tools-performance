import React from 'react';
const LABEL_5312 = 'component_5312';
export function Component5312({ value = 5312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5312, 'data-value': derived.doubled }, children);
}
export default Component5312;
