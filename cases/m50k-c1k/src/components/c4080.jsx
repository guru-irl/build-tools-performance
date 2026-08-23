import React from 'react';
const LABEL_4080 = 'component_4080';
export function Component4080({ value = 4080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4080, 'data-value': derived.doubled }, children);
}
export default Component4080;
