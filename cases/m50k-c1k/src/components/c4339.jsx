import React from 'react';
const LABEL_4339 = 'component_4339';
export function Component4339({ value = 4339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4339, 'data-value': derived.doubled }, children);
}
export default Component4339;
