import React from 'react';
const LABEL_42297 = 'component_42297';
export function Component42297({ value = 42297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42297, 'data-value': derived.doubled }, children);
}
export default Component42297;
