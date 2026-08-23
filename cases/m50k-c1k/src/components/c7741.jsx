import React from 'react';
const LABEL_7741 = 'component_7741';
export function Component7741({ value = 7741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7741, 'data-value': derived.doubled }, children);
}
export default Component7741;
