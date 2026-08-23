import React from 'react';
const LABEL_2881 = 'component_2881';
export function Component2881({ value = 2881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2881, 'data-value': derived.doubled }, children);
}
export default Component2881;
