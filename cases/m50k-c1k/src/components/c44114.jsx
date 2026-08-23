import React from 'react';
const LABEL_44114 = 'component_44114';
export function Component44114({ value = 44114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44114, 'data-value': derived.doubled }, children);
}
export default Component44114;
