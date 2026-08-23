import React from 'react';
const LABEL_6549 = 'component_6549';
export function Component6549({ value = 6549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6549, 'data-value': derived.doubled }, children);
}
export default Component6549;
