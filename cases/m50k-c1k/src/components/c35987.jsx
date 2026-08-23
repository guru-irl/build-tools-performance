import React from 'react';
const LABEL_35987 = 'component_35987';
export function Component35987({ value = 35987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35987, 'data-value': derived.doubled }, children);
}
export default Component35987;
