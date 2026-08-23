import React from 'react';
const LABEL_4482 = 'component_4482';
export function Component4482({ value = 4482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4482, 'data-value': derived.doubled }, children);
}
export default Component4482;
