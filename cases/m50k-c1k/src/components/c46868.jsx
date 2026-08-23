import React from 'react';
const LABEL_46868 = 'component_46868';
export function Component46868({ value = 46868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46868, 'data-value': derived.doubled }, children);
}
export default Component46868;
