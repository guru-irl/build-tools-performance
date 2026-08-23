import React from 'react';
const LABEL_27856 = 'component_27856';
export function Component27856({ value = 27856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27856, 'data-value': derived.doubled }, children);
}
export default Component27856;
