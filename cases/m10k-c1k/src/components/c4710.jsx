import React from 'react';
const LABEL_4710 = 'component_4710';
export function Component4710({ value = 4710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4710, 'data-value': derived.doubled }, children);
}
export default Component4710;
