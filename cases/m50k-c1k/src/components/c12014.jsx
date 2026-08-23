import React from 'react';
const LABEL_12014 = 'component_12014';
export function Component12014({ value = 12014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12014, 'data-value': derived.doubled }, children);
}
export default Component12014;
