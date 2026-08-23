import React from 'react';
const LABEL_44933 = 'component_44933';
export function Component44933({ value = 44933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44933, 'data-value': derived.doubled }, children);
}
export default Component44933;
