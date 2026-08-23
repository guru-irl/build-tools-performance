import React from 'react';
const LABEL_27995 = 'component_27995';
export function Component27995({ value = 27995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27995, 'data-value': derived.doubled }, children);
}
export default Component27995;
