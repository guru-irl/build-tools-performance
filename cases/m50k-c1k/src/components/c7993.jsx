import React from 'react';
const LABEL_7993 = 'component_7993';
export function Component7993({ value = 7993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7993, 'data-value': derived.doubled }, children);
}
export default Component7993;
