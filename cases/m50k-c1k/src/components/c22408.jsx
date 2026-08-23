import React from 'react';
const LABEL_22408 = 'component_22408';
export function Component22408({ value = 22408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22408, 'data-value': derived.doubled }, children);
}
export default Component22408;
