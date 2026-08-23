import React from 'react';
const LABEL_36728 = 'component_36728';
export function Component36728({ value = 36728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36728, 'data-value': derived.doubled }, children);
}
export default Component36728;
