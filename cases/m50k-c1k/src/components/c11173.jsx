import React from 'react';
const LABEL_11173 = 'component_11173';
export function Component11173({ value = 11173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11173, 'data-value': derived.doubled }, children);
}
export default Component11173;
