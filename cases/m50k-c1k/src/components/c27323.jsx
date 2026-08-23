import React from 'react';
const LABEL_27323 = 'component_27323';
export function Component27323({ value = 27323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27323, 'data-value': derived.doubled }, children);
}
export default Component27323;
