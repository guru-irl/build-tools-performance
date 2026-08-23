import React from 'react';
const LABEL_22317 = 'component_22317';
export function Component22317({ value = 22317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22317, 'data-value': derived.doubled }, children);
}
export default Component22317;
