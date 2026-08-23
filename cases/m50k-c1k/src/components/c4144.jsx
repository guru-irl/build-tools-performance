import React from 'react';
const LABEL_4144 = 'component_4144';
export function Component4144({ value = 4144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4144, 'data-value': derived.doubled }, children);
}
export default Component4144;
