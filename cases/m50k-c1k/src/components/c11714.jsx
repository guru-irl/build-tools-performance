import React from 'react';
const LABEL_11714 = 'component_11714';
export function Component11714({ value = 11714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11714, 'data-value': derived.doubled }, children);
}
export default Component11714;
