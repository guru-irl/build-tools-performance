import React from 'react';
const LABEL_20075 = 'component_20075';
export function Component20075({ value = 20075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20075, 'data-value': derived.doubled }, children);
}
export default Component20075;
