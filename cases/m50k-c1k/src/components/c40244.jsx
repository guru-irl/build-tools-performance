import React from 'react';
const LABEL_40244 = 'component_40244';
export function Component40244({ value = 40244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40244, 'data-value': derived.doubled }, children);
}
export default Component40244;
