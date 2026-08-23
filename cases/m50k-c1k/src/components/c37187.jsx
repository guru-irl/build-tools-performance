import React from 'react';
const LABEL_37187 = 'component_37187';
export function Component37187({ value = 37187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37187, 'data-value': derived.doubled }, children);
}
export default Component37187;
