import React from 'react';
const LABEL_45200 = 'component_45200';
export function Component45200({ value = 45200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45200, 'data-value': derived.doubled }, children);
}
export default Component45200;
