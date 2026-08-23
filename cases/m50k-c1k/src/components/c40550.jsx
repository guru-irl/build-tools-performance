import React from 'react';
const LABEL_40550 = 'component_40550';
export function Component40550({ value = 40550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40550, 'data-value': derived.doubled }, children);
}
export default Component40550;
