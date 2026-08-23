import React from 'react';
const LABEL_38270 = 'component_38270';
export function Component38270({ value = 38270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38270, 'data-value': derived.doubled }, children);
}
export default Component38270;
