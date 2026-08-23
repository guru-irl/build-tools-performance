import React from 'react';
const LABEL_27507 = 'component_27507';
export function Component27507({ value = 27507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27507, 'data-value': derived.doubled }, children);
}
export default Component27507;
