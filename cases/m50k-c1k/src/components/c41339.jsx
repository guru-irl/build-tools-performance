import React from 'react';
const LABEL_41339 = 'component_41339';
export function Component41339({ value = 41339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41339, 'data-value': derived.doubled }, children);
}
export default Component41339;
