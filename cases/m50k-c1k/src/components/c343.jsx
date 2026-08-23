import React from 'react';
const LABEL_343 = 'component_343';
export function Component343({ value = 343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_343, 'data-value': derived.doubled }, children);
}
export default Component343;
