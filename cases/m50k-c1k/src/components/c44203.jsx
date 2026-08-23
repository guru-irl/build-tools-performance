import React from 'react';
const LABEL_44203 = 'component_44203';
export function Component44203({ value = 44203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44203, 'data-value': derived.doubled }, children);
}
export default Component44203;
