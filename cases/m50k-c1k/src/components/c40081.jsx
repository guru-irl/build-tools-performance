import React from 'react';
const LABEL_40081 = 'component_40081';
export function Component40081({ value = 40081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40081, 'data-value': derived.doubled }, children);
}
export default Component40081;
