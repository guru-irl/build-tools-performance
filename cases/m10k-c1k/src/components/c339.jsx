import React from 'react';
const LABEL_339 = 'component_339';
export function Component339({ value = 339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_339, 'data-value': derived.doubled }, children);
}
export default Component339;
