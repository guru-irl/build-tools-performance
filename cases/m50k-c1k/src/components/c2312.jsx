import React from 'react';
const LABEL_2312 = 'component_2312';
export function Component2312({ value = 2312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2312, 'data-value': derived.doubled }, children);
}
export default Component2312;
