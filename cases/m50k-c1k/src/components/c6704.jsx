import React from 'react';
const LABEL_6704 = 'component_6704';
export function Component6704({ value = 6704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6704, 'data-value': derived.doubled }, children);
}
export default Component6704;
