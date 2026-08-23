import React from 'react';
const LABEL_46338 = 'component_46338';
export function Component46338({ value = 46338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46338, 'data-value': derived.doubled }, children);
}
export default Component46338;
