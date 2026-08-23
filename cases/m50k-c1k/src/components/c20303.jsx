import React from 'react';
const LABEL_20303 = 'component_20303';
export function Component20303({ value = 20303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20303, 'data-value': derived.doubled }, children);
}
export default Component20303;
