import React from 'react';
const LABEL_243 = 'component_243';
export function Component243({ value = 243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_243, 'data-value': derived.doubled }, children);
}
export default Component243;
