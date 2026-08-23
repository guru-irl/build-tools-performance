import React from 'react';
const LABEL_28790 = 'component_28790';
export function Component28790({ value = 28790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28790, 'data-value': derived.doubled }, children);
}
export default Component28790;
