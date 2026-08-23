import React from 'react';
const LABEL_8896 = 'component_8896';
export function Component8896({ value = 8896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8896, 'data-value': derived.doubled }, children);
}
export default Component8896;
