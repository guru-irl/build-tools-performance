import React from 'react';
const LABEL_7023 = 'component_7023';
export function Component7023({ value = 7023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7023, 'data-value': derived.doubled }, children);
}
export default Component7023;
