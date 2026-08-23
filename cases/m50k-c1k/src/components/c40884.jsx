import React from 'react';
const LABEL_40884 = 'component_40884';
export function Component40884({ value = 40884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40884, 'data-value': derived.doubled }, children);
}
export default Component40884;
