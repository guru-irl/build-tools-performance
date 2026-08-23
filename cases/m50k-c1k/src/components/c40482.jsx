import React from 'react';
const LABEL_40482 = 'component_40482';
export function Component40482({ value = 40482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40482, 'data-value': derived.doubled }, children);
}
export default Component40482;
