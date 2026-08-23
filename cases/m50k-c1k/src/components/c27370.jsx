import React from 'react';
const LABEL_27370 = 'component_27370';
export function Component27370({ value = 27370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27370, 'data-value': derived.doubled }, children);
}
export default Component27370;
