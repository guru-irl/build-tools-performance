import React from 'react';
const LABEL_20200 = 'component_20200';
export function Component20200({ value = 20200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20200, 'data-value': derived.doubled }, children);
}
export default Component20200;
