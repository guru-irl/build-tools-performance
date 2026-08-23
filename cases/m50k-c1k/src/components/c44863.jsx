import React from 'react';
const LABEL_44863 = 'component_44863';
export function Component44863({ value = 44863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44863, 'data-value': derived.doubled }, children);
}
export default Component44863;
