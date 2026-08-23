import React from 'react';
const LABEL_27420 = 'component_27420';
export function Component27420({ value = 27420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27420, 'data-value': derived.doubled }, children);
}
export default Component27420;
