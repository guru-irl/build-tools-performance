import React from 'react';
const LABEL_27381 = 'component_27381';
export function Component27381({ value = 27381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27381, 'data-value': derived.doubled }, children);
}
export default Component27381;
