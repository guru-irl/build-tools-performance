import React from 'react';
const LABEL_46221 = 'component_46221';
export function Component46221({ value = 46221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46221, 'data-value': derived.doubled }, children);
}
export default Component46221;
