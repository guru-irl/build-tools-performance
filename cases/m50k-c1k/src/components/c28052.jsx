import React from 'react';
const LABEL_28052 = 'component_28052';
export function Component28052({ value = 28052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28052, 'data-value': derived.doubled }, children);
}
export default Component28052;
