import React from 'react';
const LABEL_46656 = 'component_46656';
export function Component46656({ value = 46656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46656, 'data-value': derived.doubled }, children);
}
export default Component46656;
