import React from 'react';
const LABEL_12005 = 'component_12005';
export function Component12005({ value = 12005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12005, 'data-value': derived.doubled }, children);
}
export default Component12005;
