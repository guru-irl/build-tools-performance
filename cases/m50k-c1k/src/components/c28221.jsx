import React from 'react';
const LABEL_28221 = 'component_28221';
export function Component28221({ value = 28221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28221, 'data-value': derived.doubled }, children);
}
export default Component28221;
