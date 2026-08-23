import React from 'react';
const LABEL_5339 = 'component_5339';
export function Component5339({ value = 5339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5339, 'data-value': derived.doubled }, children);
}
export default Component5339;
