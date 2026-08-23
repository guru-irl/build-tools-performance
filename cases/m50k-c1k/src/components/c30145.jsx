import React from 'react';
const LABEL_30145 = 'component_30145';
export function Component30145({ value = 30145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30145, 'data-value': derived.doubled }, children);
}
export default Component30145;
