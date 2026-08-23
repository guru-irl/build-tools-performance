import React from 'react';
const LABEL_40872 = 'component_40872';
export function Component40872({ value = 40872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40872, 'data-value': derived.doubled }, children);
}
export default Component40872;
