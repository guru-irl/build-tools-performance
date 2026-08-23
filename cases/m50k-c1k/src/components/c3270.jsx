import React from 'react';
const LABEL_3270 = 'component_3270';
export function Component3270({ value = 3270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3270, 'data-value': derived.doubled }, children);
}
export default Component3270;
