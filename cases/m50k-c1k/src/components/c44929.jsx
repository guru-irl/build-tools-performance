import React from 'react';
const LABEL_44929 = 'component_44929';
export function Component44929({ value = 44929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44929, 'data-value': derived.doubled }, children);
}
export default Component44929;
