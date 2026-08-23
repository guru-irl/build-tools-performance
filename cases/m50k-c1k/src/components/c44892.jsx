import React from 'react';
const LABEL_44892 = 'component_44892';
export function Component44892({ value = 44892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44892, 'data-value': derived.doubled }, children);
}
export default Component44892;
