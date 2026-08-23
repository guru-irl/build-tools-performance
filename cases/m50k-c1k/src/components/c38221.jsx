import React from 'react';
const LABEL_38221 = 'component_38221';
export function Component38221({ value = 38221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38221, 'data-value': derived.doubled }, children);
}
export default Component38221;
