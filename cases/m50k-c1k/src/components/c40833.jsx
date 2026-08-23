import React from 'react';
const LABEL_40833 = 'component_40833';
export function Component40833({ value = 40833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40833, 'data-value': derived.doubled }, children);
}
export default Component40833;
