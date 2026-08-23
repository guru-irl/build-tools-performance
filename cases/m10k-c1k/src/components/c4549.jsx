import React from 'react';
const LABEL_4549 = 'component_4549';
export function Component4549({ value = 4549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4549, 'data-value': derived.doubled }, children);
}
export default Component4549;
