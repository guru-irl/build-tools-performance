import React from 'react';
const LABEL_10297 = 'component_10297';
export function Component10297({ value = 10297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10297, 'data-value': derived.doubled }, children);
}
export default Component10297;
