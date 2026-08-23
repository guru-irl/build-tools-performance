import React from 'react';
const LABEL_4424 = 'component_4424';
export function Component4424({ value = 4424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4424, 'data-value': derived.doubled }, children);
}
export default Component4424;
