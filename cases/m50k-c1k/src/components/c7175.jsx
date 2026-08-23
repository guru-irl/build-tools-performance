import React from 'react';
const LABEL_7175 = 'component_7175';
export function Component7175({ value = 7175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7175, 'data-value': derived.doubled }, children);
}
export default Component7175;
