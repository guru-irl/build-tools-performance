import React from 'react';
const LABEL_41665 = 'component_41665';
export function Component41665({ value = 41665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41665, 'data-value': derived.doubled }, children);
}
export default Component41665;
