import React from 'react';
const LABEL_11896 = 'component_11896';
export function Component11896({ value = 11896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11896, 'data-value': derived.doubled }, children);
}
export default Component11896;
