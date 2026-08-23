import React from 'react';
const LABEL_27482 = 'component_27482';
export function Component27482({ value = 27482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27482, 'data-value': derived.doubled }, children);
}
export default Component27482;
