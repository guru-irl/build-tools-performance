import React from 'react';
const LABEL_20171 = 'component_20171';
export function Component20171({ value = 20171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20171, 'data-value': derived.doubled }, children);
}
export default Component20171;
