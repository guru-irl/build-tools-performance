import React from 'react';
const LABEL_40868 = 'component_40868';
export function Component40868({ value = 40868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40868, 'data-value': derived.doubled }, children);
}
export default Component40868;
