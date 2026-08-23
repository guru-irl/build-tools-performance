import React from 'react';
const LABEL_26034 = 'component_26034';
export function Component26034({ value = 26034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26034, 'data-value': derived.doubled }, children);
}
export default Component26034;
