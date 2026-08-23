import React from 'react';
const LABEL_44847 = 'component_44847';
export function Component44847({ value = 44847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44847, 'data-value': derived.doubled }, children);
}
export default Component44847;
