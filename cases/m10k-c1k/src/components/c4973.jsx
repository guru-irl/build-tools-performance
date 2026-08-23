import React from 'react';
const LABEL_4973 = 'component_4973';
export function Component4973({ value = 4973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4973, 'data-value': derived.doubled }, children);
}
export default Component4973;
