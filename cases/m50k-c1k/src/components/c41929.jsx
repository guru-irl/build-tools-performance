import React from 'react';
const LABEL_41929 = 'component_41929';
export function Component41929({ value = 41929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41929, 'data-value': derived.doubled }, children);
}
export default Component41929;
