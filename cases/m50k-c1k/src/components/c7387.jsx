import React from 'react';
const LABEL_7387 = 'component_7387';
export function Component7387({ value = 7387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7387, 'data-value': derived.doubled }, children);
}
export default Component7387;
