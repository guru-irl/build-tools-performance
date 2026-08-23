import React from 'react';
const LABEL_13176 = 'component_13176';
export function Component13176({ value = 13176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13176, 'data-value': derived.doubled }, children);
}
export default Component13176;
