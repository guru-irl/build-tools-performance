import React from 'react';
const LABEL_37033 = 'component_37033';
export function Component37033({ value = 37033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37033, 'data-value': derived.doubled }, children);
}
export default Component37033;
