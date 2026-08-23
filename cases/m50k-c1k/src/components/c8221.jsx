import React from 'react';
const LABEL_8221 = 'component_8221';
export function Component8221({ value = 8221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8221, 'data-value': derived.doubled }, children);
}
export default Component8221;
