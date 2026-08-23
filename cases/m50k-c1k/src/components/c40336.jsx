import React from 'react';
const LABEL_40336 = 'component_40336';
export function Component40336({ value = 40336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40336, 'data-value': derived.doubled }, children);
}
export default Component40336;
