import React from 'react';
const LABEL_11996 = 'component_11996';
export function Component11996({ value = 11996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11996, 'data-value': derived.doubled }, children);
}
export default Component11996;
