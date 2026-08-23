import React from 'react';
const LABEL_27897 = 'component_27897';
export function Component27897({ value = 27897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27897, 'data-value': derived.doubled }, children);
}
export default Component27897;
