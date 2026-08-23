import React from 'react';
const LABEL_1114 = 'component_1114';
export function Component1114({ value = 1114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1114, 'data-value': derived.doubled }, children);
}
export default Component1114;
