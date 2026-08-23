import React from 'react';
const LABEL_5575 = 'component_5575';
export function Component5575({ value = 5575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5575, 'data-value': derived.doubled }, children);
}
export default Component5575;
