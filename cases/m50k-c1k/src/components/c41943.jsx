import React from 'react';
const LABEL_41943 = 'component_41943';
export function Component41943({ value = 41943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41943, 'data-value': derived.doubled }, children);
}
export default Component41943;
