import React from 'react';
const LABEL_44322 = 'component_44322';
export function Component44322({ value = 44322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44322, 'data-value': derived.doubled }, children);
}
export default Component44322;
