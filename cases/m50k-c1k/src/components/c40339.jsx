import React from 'react';
const LABEL_40339 = 'component_40339';
export function Component40339({ value = 40339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40339, 'data-value': derived.doubled }, children);
}
export default Component40339;
