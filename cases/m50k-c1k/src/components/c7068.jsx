import React from 'react';
const LABEL_7068 = 'component_7068';
export function Component7068({ value = 7068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7068, 'data-value': derived.doubled }, children);
}
export default Component7068;
