import React from 'react';
const LABEL_4410 = 'component_4410';
export function Component4410({ value = 4410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4410, 'data-value': derived.doubled }, children);
}
export default Component4410;
