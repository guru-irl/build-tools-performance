import React from 'react';
const LABEL_20337 = 'component_20337';
export function Component20337({ value = 20337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20337, 'data-value': derived.doubled }, children);
}
export default Component20337;
