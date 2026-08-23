import React from 'react';
const LABEL_41472 = 'component_41472';
export function Component41472({ value = 41472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41472, 'data-value': derived.doubled }, children);
}
export default Component41472;
