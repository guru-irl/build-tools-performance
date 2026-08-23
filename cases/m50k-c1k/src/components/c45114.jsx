import React from 'react';
const LABEL_45114 = 'component_45114';
export function Component45114({ value = 45114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45114, 'data-value': derived.doubled }, children);
}
export default Component45114;
