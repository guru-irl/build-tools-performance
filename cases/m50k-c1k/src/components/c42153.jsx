import React from 'react';
const LABEL_42153 = 'component_42153';
export function Component42153({ value = 42153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42153, 'data-value': derived.doubled }, children);
}
export default Component42153;
