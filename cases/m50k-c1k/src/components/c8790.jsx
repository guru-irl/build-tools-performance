import React from 'react';
const LABEL_8790 = 'component_8790';
export function Component8790({ value = 8790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8790, 'data-value': derived.doubled }, children);
}
export default Component8790;
