import React from 'react';
const LABEL_25001 = 'component_25001';
export function Component25001({ value = 25001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25001, 'data-value': derived.doubled }, children);
}
export default Component25001;
