import React from 'react';
const LABEL_19173 = 'component_19173';
export function Component19173({ value = 19173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19173, 'data-value': derived.doubled }, children);
}
export default Component19173;
