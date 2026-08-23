import React from 'react';
const LABEL_8210 = 'component_8210';
export function Component8210({ value = 8210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8210, 'data-value': derived.doubled }, children);
}
export default Component8210;
