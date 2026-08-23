import React from 'react';
const LABEL_6067 = 'component_6067';
export function Component6067({ value = 6067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6067, 'data-value': derived.doubled }, children);
}
export default Component6067;
