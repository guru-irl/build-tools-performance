import React from 'react';
const LABEL_7996 = 'component_7996';
export function Component7996({ value = 7996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7996, 'data-value': derived.doubled }, children);
}
export default Component7996;
