import React from 'react';
const LABEL_4840 = 'component_4840';
export function Component4840({ value = 4840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4840, 'data-value': derived.doubled }, children);
}
export default Component4840;
