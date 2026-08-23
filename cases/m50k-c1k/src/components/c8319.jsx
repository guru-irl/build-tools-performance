import React from 'react';
const LABEL_8319 = 'component_8319';
export function Component8319({ value = 8319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8319, 'data-value': derived.doubled }, children);
}
export default Component8319;
