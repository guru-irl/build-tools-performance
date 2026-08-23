import React from 'react';
const LABEL_23996 = 'component_23996';
export function Component23996({ value = 23996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23996, 'data-value': derived.doubled }, children);
}
export default Component23996;
