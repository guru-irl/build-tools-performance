import React from 'react';
const LABEL_28223 = 'component_28223';
export function Component28223({ value = 28223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28223, 'data-value': derived.doubled }, children);
}
export default Component28223;
