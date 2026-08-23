import React from 'react';
const LABEL_4955 = 'component_4955';
export function Component4955({ value = 4955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4955, 'data-value': derived.doubled }, children);
}
export default Component4955;
