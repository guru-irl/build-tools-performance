import React from 'react';
const LABEL_19517 = 'component_19517';
export function Component19517({ value = 19517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19517, 'data-value': derived.doubled }, children);
}
export default Component19517;
