import React from 'react';
const LABEL_27386 = 'component_27386';
export function Component27386({ value = 27386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27386, 'data-value': derived.doubled }, children);
}
export default Component27386;
