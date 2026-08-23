import React from 'react';
const LABEL_6547 = 'component_6547';
export function Component6547({ value = 6547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6547, 'data-value': derived.doubled }, children);
}
export default Component6547;
