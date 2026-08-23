import React from 'react';
const LABEL_46339 = 'component_46339';
export function Component46339({ value = 46339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46339, 'data-value': derived.doubled }, children);
}
export default Component46339;
