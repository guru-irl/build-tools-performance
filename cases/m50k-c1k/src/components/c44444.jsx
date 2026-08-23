import React from 'react';
const LABEL_44444 = 'component_44444';
export function Component44444({ value = 44444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44444, 'data-value': derived.doubled }, children);
}
export default Component44444;
