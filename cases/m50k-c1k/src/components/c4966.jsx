import React from 'react';
const LABEL_4966 = 'component_4966';
export function Component4966({ value = 4966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4966, 'data-value': derived.doubled }, children);
}
export default Component4966;
