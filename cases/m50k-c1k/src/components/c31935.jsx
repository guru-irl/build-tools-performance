import React from 'react';
const LABEL_31935 = 'component_31935';
export function Component31935({ value = 31935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31935, 'data-value': derived.doubled }, children);
}
export default Component31935;
