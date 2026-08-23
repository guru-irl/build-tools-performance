import React from 'react';
const LABEL_27566 = 'component_27566';
export function Component27566({ value = 27566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27566, 'data-value': derived.doubled }, children);
}
export default Component27566;
