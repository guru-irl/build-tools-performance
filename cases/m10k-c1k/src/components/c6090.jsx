import React from 'react';
const LABEL_6090 = 'component_6090';
export function Component6090({ value = 6090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6090, 'data-value': derived.doubled }, children);
}
export default Component6090;
