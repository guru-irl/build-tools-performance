import React from 'react';
const LABEL_41005 = 'component_41005';
export function Component41005({ value = 41005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41005, 'data-value': derived.doubled }, children);
}
export default Component41005;
