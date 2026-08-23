import React from 'react';
const LABEL_8952 = 'component_8952';
export function Component8952({ value = 8952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8952, 'data-value': derived.doubled }, children);
}
export default Component8952;
