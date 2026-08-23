import React from 'react';
const LABEL_5337 = 'component_5337';
export function Component5337({ value = 5337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5337, 'data-value': derived.doubled }, children);
}
export default Component5337;
