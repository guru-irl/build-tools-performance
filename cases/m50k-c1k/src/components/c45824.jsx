import React from 'react';
const LABEL_45824 = 'component_45824';
export function Component45824({ value = 45824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45824, 'data-value': derived.doubled }, children);
}
export default Component45824;
