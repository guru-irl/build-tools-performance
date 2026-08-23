import React from 'react';
const LABEL_34683 = 'component_34683';
export function Component34683({ value = 34683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34683, 'data-value': derived.doubled }, children);
}
export default Component34683;
