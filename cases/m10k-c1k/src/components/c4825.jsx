import React from 'react';
const LABEL_4825 = 'component_4825';
export function Component4825({ value = 4825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4825, 'data-value': derived.doubled }, children);
}
export default Component4825;
