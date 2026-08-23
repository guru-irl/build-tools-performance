import React from 'react';
const LABEL_6415 = 'component_6415';
export function Component6415({ value = 6415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6415, 'data-value': derived.doubled }, children);
}
export default Component6415;
