import React from 'react';
const LABEL_14446 = 'component_14446';
export function Component14446({ value = 14446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14446, 'data-value': derived.doubled }, children);
}
export default Component14446;
