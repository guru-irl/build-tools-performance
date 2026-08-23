import React from 'react';
const LABEL_6896 = 'component_6896';
export function Component6896({ value = 6896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6896, 'data-value': derived.doubled }, children);
}
export default Component6896;
