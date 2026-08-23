import React from 'react';
const LABEL_13179 = 'component_13179';
export function Component13179({ value = 13179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13179, 'data-value': derived.doubled }, children);
}
export default Component13179;
