import React from 'react';
const LABEL_8339 = 'component_8339';
export function Component8339({ value = 8339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8339, 'data-value': derived.doubled }, children);
}
export default Component8339;
