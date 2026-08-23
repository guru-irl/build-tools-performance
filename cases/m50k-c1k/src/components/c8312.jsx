import React from 'react';
const LABEL_8312 = 'component_8312';
export function Component8312({ value = 8312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8312, 'data-value': derived.doubled }, children);
}
export default Component8312;
