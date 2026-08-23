import React from 'react';
const LABEL_40240 = 'component_40240';
export function Component40240({ value = 40240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40240, 'data-value': derived.doubled }, children);
}
export default Component40240;
