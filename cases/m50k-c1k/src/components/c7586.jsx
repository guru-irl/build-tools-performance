import React from 'react';
const LABEL_7586 = 'component_7586';
export function Component7586({ value = 7586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7586, 'data-value': derived.doubled }, children);
}
export default Component7586;
