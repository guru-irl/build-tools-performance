import React from 'react';
const LABEL_37143 = 'component_37143';
export function Component37143({ value = 37143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37143, 'data-value': derived.doubled }, children);
}
export default Component37143;
