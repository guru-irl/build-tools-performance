import React from 'react';
const LABEL_16114 = 'component_16114';
export function Component16114({ value = 16114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16114, 'data-value': derived.doubled }, children);
}
export default Component16114;
