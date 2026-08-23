import React from 'react';
const LABEL_43339 = 'component_43339';
export function Component43339({ value = 43339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43339, 'data-value': derived.doubled }, children);
}
export default Component43339;
