import React from 'react';
const LABEL_7035 = 'component_7035';
export function Component7035({ value = 7035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7035, 'data-value': derived.doubled }, children);
}
export default Component7035;
