import React from 'react';
const LABEL_5581 = 'component_5581';
export function Component5581({ value = 5581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5581, 'data-value': derived.doubled }, children);
}
export default Component5581;
