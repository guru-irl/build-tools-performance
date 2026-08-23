import React from 'react';
const LABEL_34546 = 'component_34546';
export function Component34546({ value = 34546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34546, 'data-value': derived.doubled }, children);
}
export default Component34546;
