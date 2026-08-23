import React from 'react';
const LABEL_5586 = 'component_5586';
export function Component5586({ value = 5586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5586, 'data-value': derived.doubled }, children);
}
export default Component5586;
