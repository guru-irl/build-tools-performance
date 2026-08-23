import React from 'react';
const LABEL_44773 = 'component_44773';
export function Component44773({ value = 44773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44773, 'data-value': derived.doubled }, children);
}
export default Component44773;
