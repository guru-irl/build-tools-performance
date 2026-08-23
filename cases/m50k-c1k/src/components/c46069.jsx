import React from 'react';
const LABEL_46069 = 'component_46069';
export function Component46069({ value = 46069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46069, 'data-value': derived.doubled }, children);
}
export default Component46069;
