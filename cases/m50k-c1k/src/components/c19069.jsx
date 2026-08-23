import React from 'react';
const LABEL_19069 = 'component_19069';
export function Component19069({ value = 19069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19069, 'data-value': derived.doubled }, children);
}
export default Component19069;
