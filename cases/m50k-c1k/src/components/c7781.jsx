import React from 'react';
const LABEL_7781 = 'component_7781';
export function Component7781({ value = 7781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7781, 'data-value': derived.doubled }, children);
}
export default Component7781;
