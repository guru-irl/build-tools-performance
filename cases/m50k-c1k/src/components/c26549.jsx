import React from 'react';
const LABEL_26549 = 'component_26549';
export function Component26549({ value = 26549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26549, 'data-value': derived.doubled }, children);
}
export default Component26549;
