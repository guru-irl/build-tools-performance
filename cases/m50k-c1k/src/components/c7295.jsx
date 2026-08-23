import React from 'react';
const LABEL_7295 = 'component_7295';
export function Component7295({ value = 7295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7295, 'data-value': derived.doubled }, children);
}
export default Component7295;
