import React from 'react';
const LABEL_16173 = 'component_16173';
export function Component16173({ value = 16173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16173, 'data-value': derived.doubled }, children);
}
export default Component16173;
