import React from 'react';
const LABEL_40596 = 'component_40596';
export function Component40596({ value = 40596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40596, 'data-value': derived.doubled }, children);
}
export default Component40596;
