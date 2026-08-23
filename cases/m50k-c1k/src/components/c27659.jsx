import React from 'react';
const LABEL_27659 = 'component_27659';
export function Component27659({ value = 27659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27659, 'data-value': derived.doubled }, children);
}
export default Component27659;
