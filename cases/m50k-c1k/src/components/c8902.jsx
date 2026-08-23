import React from 'react';
const LABEL_8902 = 'component_8902';
export function Component8902({ value = 8902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8902, 'data-value': derived.doubled }, children);
}
export default Component8902;
