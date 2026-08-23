import React from 'react';
const LABEL_45833 = 'component_45833';
export function Component45833({ value = 45833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45833, 'data-value': derived.doubled }, children);
}
export default Component45833;
