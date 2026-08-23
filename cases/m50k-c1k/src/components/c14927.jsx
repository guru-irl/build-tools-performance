import React from 'react';
const LABEL_14927 = 'component_14927';
export function Component14927({ value = 14927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14927, 'data-value': derived.doubled }, children);
}
export default Component14927;
