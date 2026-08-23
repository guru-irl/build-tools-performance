import React from 'react';
const LABEL_37017 = 'component_37017';
export function Component37017({ value = 37017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37017, 'data-value': derived.doubled }, children);
}
export default Component37017;
