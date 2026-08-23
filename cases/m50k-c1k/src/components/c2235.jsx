import React from 'react';
const LABEL_2235 = 'component_2235';
export function Component2235({ value = 2235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2235, 'data-value': derived.doubled }, children);
}
export default Component2235;
