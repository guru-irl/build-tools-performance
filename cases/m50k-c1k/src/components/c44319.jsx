import React from 'react';
const LABEL_44319 = 'component_44319';
export function Component44319({ value = 44319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44319, 'data-value': derived.doubled }, children);
}
export default Component44319;
