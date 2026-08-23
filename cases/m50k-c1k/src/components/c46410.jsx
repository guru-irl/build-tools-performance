import React from 'react';
const LABEL_46410 = 'component_46410';
export function Component46410({ value = 46410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46410, 'data-value': derived.doubled }, children);
}
export default Component46410;
