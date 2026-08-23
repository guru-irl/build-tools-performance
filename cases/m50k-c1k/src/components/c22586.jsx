import React from 'react';
const LABEL_22586 = 'component_22586';
export function Component22586({ value = 22586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22586, 'data-value': derived.doubled }, children);
}
export default Component22586;
