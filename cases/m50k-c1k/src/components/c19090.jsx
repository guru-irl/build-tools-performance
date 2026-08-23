import React from 'react';
const LABEL_19090 = 'component_19090';
export function Component19090({ value = 19090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19090, 'data-value': derived.doubled }, children);
}
export default Component19090;
