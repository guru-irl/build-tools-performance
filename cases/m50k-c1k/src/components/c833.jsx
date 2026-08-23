import React from 'react';
const LABEL_833 = 'component_833';
export function Component833({ value = 833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_833, 'data-value': derived.doubled }, children);
}
export default Component833;
