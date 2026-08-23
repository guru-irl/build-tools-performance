import React from 'react';
const LABEL_19988 = 'component_19988';
export function Component19988({ value = 19988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19988, 'data-value': derived.doubled }, children);
}
export default Component19988;
