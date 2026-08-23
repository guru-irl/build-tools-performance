import React from 'react';
const LABEL_27088 = 'component_27088';
export function Component27088({ value = 27088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27088, 'data-value': derived.doubled }, children);
}
export default Component27088;
