import React from 'react';
const LABEL_7130 = 'component_7130';
export function Component7130({ value = 7130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7130, 'data-value': derived.doubled }, children);
}
export default Component7130;
