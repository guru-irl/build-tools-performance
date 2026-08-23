import React from 'react';
const LABEL_40740 = 'component_40740';
export function Component40740({ value = 40740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40740, 'data-value': derived.doubled }, children);
}
export default Component40740;
