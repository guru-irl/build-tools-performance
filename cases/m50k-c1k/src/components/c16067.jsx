import React from 'react';
const LABEL_16067 = 'component_16067';
export function Component16067({ value = 16067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16067, 'data-value': derived.doubled }, children);
}
export default Component16067;
