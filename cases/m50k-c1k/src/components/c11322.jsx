import React from 'react';
const LABEL_11322 = 'component_11322';
export function Component11322({ value = 11322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11322, 'data-value': derived.doubled }, children);
}
export default Component11322;
