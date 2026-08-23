import React from 'react';
const LABEL_27863 = 'component_27863';
export function Component27863({ value = 27863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27863, 'data-value': derived.doubled }, children);
}
export default Component27863;
