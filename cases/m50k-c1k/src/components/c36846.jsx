import React from 'react';
const LABEL_36846 = 'component_36846';
export function Component36846({ value = 36846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36846, 'data-value': derived.doubled }, children);
}
export default Component36846;
