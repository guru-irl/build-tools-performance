import React from 'react';
const LABEL_4816 = 'component_4816';
export function Component4816({ value = 4816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4816, 'data-value': derived.doubled }, children);
}
export default Component4816;
