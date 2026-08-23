import React from 'react';
const LABEL_7373 = 'component_7373';
export function Component7373({ value = 7373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7373, 'data-value': derived.doubled }, children);
}
export default Component7373;
