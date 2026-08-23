import React from 'react';
const LABEL_38383 = 'component_38383';
export function Component38383({ value = 38383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38383, 'data-value': derived.doubled }, children);
}
export default Component38383;
