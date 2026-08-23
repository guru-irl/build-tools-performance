import React from 'react';
const LABEL_30927 = 'component_30927';
export function Component30927({ value = 30927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30927, 'data-value': derived.doubled }, children);
}
export default Component30927;
