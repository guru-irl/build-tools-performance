import React from 'react';
const LABEL_24549 = 'component_24549';
export function Component24549({ value = 24549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24549, 'data-value': derived.doubled }, children);
}
export default Component24549;
