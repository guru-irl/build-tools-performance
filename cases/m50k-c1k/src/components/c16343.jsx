import React from 'react';
const LABEL_16343 = 'component_16343';
export function Component16343({ value = 16343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16343, 'data-value': derived.doubled }, children);
}
export default Component16343;
