import React from 'react';
const LABEL_7935 = 'component_7935';
export function Component7935({ value = 7935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7935, 'data-value': derived.doubled }, children);
}
export default Component7935;
