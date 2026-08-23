import React from 'react';
const LABEL_14173 = 'component_14173';
export function Component14173({ value = 14173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14173, 'data-value': derived.doubled }, children);
}
export default Component14173;
