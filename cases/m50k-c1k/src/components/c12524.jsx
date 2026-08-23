import React from 'react';
const LABEL_12524 = 'component_12524';
export function Component12524({ value = 12524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12524, 'data-value': derived.doubled }, children);
}
export default Component12524;
