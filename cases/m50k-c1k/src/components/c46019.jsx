import React from 'react';
const LABEL_46019 = 'component_46019';
export function Component46019({ value = 46019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46019, 'data-value': derived.doubled }, children);
}
export default Component46019;
