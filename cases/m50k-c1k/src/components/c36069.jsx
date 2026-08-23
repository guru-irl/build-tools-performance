import React from 'react';
const LABEL_36069 = 'component_36069';
export function Component36069({ value = 36069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36069, 'data-value': derived.doubled }, children);
}
export default Component36069;
