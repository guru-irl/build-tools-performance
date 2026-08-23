import React from 'react';
const LABEL_25339 = 'component_25339';
export function Component25339({ value = 25339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25339, 'data-value': derived.doubled }, children);
}
export default Component25339;
