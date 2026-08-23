import React from 'react';
const LABEL_44896 = 'component_44896';
export function Component44896({ value = 44896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44896, 'data-value': derived.doubled }, children);
}
export default Component44896;
