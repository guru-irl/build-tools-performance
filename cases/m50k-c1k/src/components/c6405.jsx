import React from 'react';
const LABEL_6405 = 'component_6405';
export function Component6405({ value = 6405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6405, 'data-value': derived.doubled }, children);
}
export default Component6405;
