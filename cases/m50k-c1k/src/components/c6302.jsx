import React from 'react';
const LABEL_6302 = 'component_6302';
export function Component6302({ value = 6302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6302, 'data-value': derived.doubled }, children);
}
export default Component6302;
